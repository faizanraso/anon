"use client";

import { programs, schools } from "@/app/utils/constants";
import React from "react";
import Dropdown from "../icons/Dropdown";

export default function () {
  function mobileMenu() {
    document.querySelector("#sidemenu")!.classList.toggle("hidden");
    document.querySelector("#sidemenu")!.classList.toggle("z-20");
  }

  return (
    <>
      <button
        onClick={() => mobileMenu()}
        className="fixed bottom-5 left-5 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-gray-300 dark:bg-gray-900 dark:text-yellow-400 dark:hover:bg-gray-700 sm:hidden"
      >
        <svg
          width="24px"
          height="24px"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-black transition-colors duration-150 dark:stroke-gray-100 "
        >
          <path
            d="M3 5h18M3 12h18M3 19h18"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div
        id="sidemenu"
        className="fixed inset-0 top-0 hidden w-60 overflow-y-auto bg-white dark:bg-black sm:block"
      >
        <div className="h-16">.</div>

        <nav aria-label="Side Nav" className="flex flex-col space-y-1">
          <a
            href=""
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 underline dark:bg-black dark:text-gray-200"
          >
            Home
          </a>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-200">
              <span className="text-sm font-semibold underline"> Schools </span>
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
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-200"
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
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-200">
              <span className="text-sm font-semibold underline">
                {" "}
                Programs{" "}
              </span>
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
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-200"
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
