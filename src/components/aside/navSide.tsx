import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useContext } from "react";
import { ApodContext } from "@/context/apodContext";

const NavSide = () => {
  const session = useSession();
  const router = useRouter();
  const { apod } = useContext(ApodContext);
  const location = usePathname();
  console.log(location);
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-4 pt-8 pb-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-12 ">
              <Link
                href="/"
                className="text-white font-extrabold text-4xl text-center"
              >
                TIS
              </Link>
            </div>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-sm"
                >
                  <span className="ms-3">Insight of The Day</span>
                </Link>
              </li>
            </ul>
          </div>
          <hr className="border-gray-500 mb-4" />
          <div>
            <h1 className="text-gray-900 dark:text-white font-bold text-base pl-2 mb-2">
              Search
            </h1>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/search/image"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-sm"
                >
                  <span className="ms-3">Images</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/search/video"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-sm"
                >
                  <span className="ms-3">Videos</span>
                </Link>
              </li>
              <Link
                href="/search/album"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-sm"
              >
                <span className="ms-3">Albums</span>
              </Link>
            </ul>
          </div>
          <hr className="border-gray-500" />
          <div className="">
            <h1 className="text-gray-900 dark:text-white font-bold text-base pl-2 mb-2">
              Profile
            </h1>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/profile/likes"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-sm"
                >
                  <span className="ms-3">Likes</span>
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/profile/favorites"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-sm"
                >
                  <span className="ms-3">Settings</span>
                </Link>
              </li> */}
            </ul>
          </div>
          <hr className="border-gray-500" />
        </div>

        <div className="flex-col flex gap-4">
          {location !== "/" ? (
            <div className="bg-white w-full h-auto flex pt-2 pb-3 px-1 rounded-lg gap-1 flex-col items-center">
              <>
                <div className="w-full p-2 relative aspect-square">
                  <Image
                    src={apod && apod.url ? apod.url : "/images/login.jpg"}
                    alt="picture-of-the-day"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    className="rounded-lg"
                    width="0"
                    height="0"
                    sizes="100vw"
                    priority
                  />
                </div>
                <Link href={"/"} className="hover:underline">
                  <h3 className="font-semibold">
                    {apod && apod.url ? apod.title : ""}
                  </h3>
                </Link>
              </>
            </div>
          ) : null}
          {/* <div className="h-16 w-16 rounded-full bg-black"></div>
            <div className="flex justify-center flex-col items-center">
              <p className="font-semibold">{session.data?.user.username}</p>
              <p className="text-sm">{session.data?.user.email}</p>
            </div> */}

          <button
            className="flex items-center px-2 py-4 hover:text-red-500 rounded-lg hover:bg-gray-700  bg-red-200 text-gray-700 font-bold  group text-sm"
            onClick={() => {
              signOut();
              router.push("/login");
            }}
          >
            <span className="ms-3">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
export default NavSide;
