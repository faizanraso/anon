"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import React from "react";

export default function UserInfo(props: { session: any }) {
  var isAuthenticated = false;
  const session = props.session;

  if (session?.user?.email) {
    isAuthenticated = true;
  }

  return (
    <>
      {isAuthenticated ? (
        <div className="flex items-center justify-center gap-x-3">
          <span className="group flex shrink-0 items-center rounded-lg transition">
            <span className="sr-only">Menu</span>
            <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 object-cover text-center ">
              <span className="text-sm font-semibold text-white">
                {session?.user?.name?.charAt(0)}
              </span>
            </div>

            <p className="ms-2 hidden text-left text-xs sm:block">
              <strong className="block font-medium">
                {session?.user?.name}
              </strong>

              <span className="text-gray-500"> {session?.user?.email} </span>
            </p>
            <button
              className="ml-1 items-center justify-center rounded-full p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => signOut()}
            >
              <svg
                className="stroke-red-500"
                height={18}
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                  className="stroke-red-500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </span>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-x-3">
          {" "}
          <Link href={"https://github.com/faizanraso/anon"}>
            <span className="block text-black hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-300">
              <span className="sr-only">Anon on GitHub</span>
              <svg
                viewBox="0 0 16 16"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </span>
          </Link>
          <div className="flex flex-row gap-x-3">
            <Link href={"/login"}>
              <span className="block items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-black transition duration-200 hover:border-black hover:bg-white hover:text-black focus:outline-none focus:ring dark:border-neutral-700 dark:bg-black dark:text-white dark:hover:border-gray-300 sm:flex">
                Log In
              </span>
            </Link>
            <Link href={"/login"}>
              <span className="block items-center justify-center rounded-lg border bg-black px-3 py-2 text-xs font-medium text-white transition duration-200 hover:border-black hover:bg-white hover:text-black focus:outline-none focus:ring dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white sm:flex">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
