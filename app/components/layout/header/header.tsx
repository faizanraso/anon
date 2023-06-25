import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserInfo from "./userinfo";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header
      aria-label="Page Header"
      className=" sticky top-0 z-40 h-16 items-center justify-center border-b border-gray-200 bg-white dark:border-zinc-800 dark:bg-black"
    >
      <div className="mx-auto px-5 py-3 sm:px-10 sm:py-4">
        <div className="flex flex-row items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center justify-center gap-x-2">
              <div className="">
                <svg
                  width="35px"
                  height="35px"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                  className="fill-none"
                >
                  <path
                    d="M7 16v-4.639c0-.51.1-.999.285-1.453M17 16v-3.185m-7.778-5.08A5.506 5.506 0 0112 7c2.28 0 4.203 1.33 4.805 3.15M10 17v-2.177M14 17v-5.147C14 10.83 13.105 10 12 10s-2 .83-2 1.853v.794"
                    className="stroke-black dark:stroke-white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    className="stroke-black dark:stroke-white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>

              <p className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
                anon
              </p>
            </div>
          </Link>
          <UserInfo session={session} />
        </div>
      </div>
    </header>
  );
}
