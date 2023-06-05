"use client";

import React, { useState } from "react";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <header
      aria-label="Page Header"
      className="sticky top-0 z-50 items-center justify-center border-b border-gray-200 bg-white dark:border-zinc-800 dark:bg-black"
    >
      <div className="mx-auto px-5 py-3 sm:px-10 sm:py-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center justify-center gap-x-2">
            <div className="">
              <svg
                width="35px"
                height="35px"
                stroke-width="2"
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

          {isAuthenticated ? (
            <div className="flex flex-row items-center justify-center gap-x-3">
              <button
                type="button"
                className="group flex shrink-0 items-center rounded-lg transition"
              >
                <span className="sr-only">Menu</span>
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-8 w-8 rounded-full object-cover"
                />

                <p className="ms-2 hidden text-left text-xs sm:block">
                  <strong className="block font-medium">Eric Frusciante</strong>

                  <span className="text-gray-500"> eric@frusciante.com </span>
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-400 sm:block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex flex-row items-center justify-center gap-x-3">
              <a
                href="https://github.com/faizanraso/anon"
                className="block text-black hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-300"
              >
                <span className="sr-only">Anon on GitHub</span>
                <svg
                  viewBox="0 0 16 16"
                  className="h-6 w-6"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <div className="flex flex-row gap-x-3">
                <button
                  className="block items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-black transition duration-200 hover:border-black hover:bg-white hover:text-black focus:outline-none focus:ring dark:border-gray-500 dark:bg-black dark:text-white dark:hover:border-gray-300 sm:flex"
                  type="button"
                >
                  Log In
                </button>
                <button
                  className="block items-center justify-center rounded-lg border bg-black px-3 py-2 text-xs font-medium text-white transition duration-200 hover:border-black hover:bg-white hover:text-black focus:outline-none focus:ring dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white sm:flex"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
