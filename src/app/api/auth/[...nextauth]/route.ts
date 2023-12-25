import axios from "axios";
import NextAuth, { SessionStrategy, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        try {
          const { data } = await axios.post(
            "http://localhost:8000/api/auth/signin",
            {
              username,
              password,
            }
          );
          return data;
        } catch (e) {
          throw new Error("Username/Password Salah");
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }

      return token;
    },
    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user = token.user;

      return session;
    },
  },
});

export { handler as GET, handler as POST };
