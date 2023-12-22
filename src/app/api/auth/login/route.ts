import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import Axios from "../../axios";

const MAX_AGE = 60;

export async function POST(request: Request) {
  const body = await request.json();

  const { username, password } = body;

  try {
    const { data } = await Axios.post("/api/auth/signin", {
      username,
      password,
    });

    // Always check this
    const secret = process.env.JWT_SECRET || "";

    const token = sign(
      {
        username,
      },
      secret,
      {
        expiresIn: MAX_AGE,
      }
    );

    const seralized = serialize("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Set-Cookie": seralized },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ message: e.message }), {
      status: 500,
    });
  }
}
