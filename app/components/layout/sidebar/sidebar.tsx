import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { programs, schools } from "@/app/utils/constants";
import Dropdown from "../../icons/Dropdown";
import PostModal from "../../modals/PostModal";
import MobileMenu from "./MobileMenu";

export default async function Sidebar() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <MobileMenu />
      <div
        id="sidemenu"
        className="fixed inset-0 top-0 hidden w-60 overflow-y-auto bg-gray-50 pt-16 dark:bg-black sm:block"
      >
        {session ? (
          <>
            <div className="flex flex-col items-center justify-center py-4">
              <PostModal sessionStatus={session} />
            </div>
            <div className="mx-auto flex w-10/12 border-0 border-b border-gray-200 dark:border-gray-500"></div>
          </>
        ) : null}

        <nav aria-label="Side Nav" className="flex flex-col space-y-1 pt-2">
          <a
            href=""
            className="block rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 dark:bg-black dark:text-gray-200"
          >
            Home
          </a>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-200">
              <span className="text-sm font-semibold"> Schools </span>
              <Dropdown />
            </summary>
            <nav
              aria-label="Schools Nav"
              className="mt-2 flex flex-col space-y-1 px-4"
            >
              {schools.map((school, index) => (
                <a
                  key={index}
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-200"
                >
                  {school}
                </a>
              ))}
            </nav>
          </details>
          <details
            open
            className="group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-200">
              <span className="text-sm font-semibold"> Programs </span>
              <Dropdown />
            </summary>

            <nav
              aria-label="Programs Nav"
              className="mt-2 flex flex-col space-y-1 px-4"
            >
              {programs.map((program, index) => (
                <a
                  key={index}
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  hover:text-gray-700 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-200"
                >
                  {program}
                </a>
              ))}
            </nav>
          </details>
        </nav>
      </div>
    </>
  );
}
