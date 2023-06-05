import React from "react";
import Dropdown from "../icons/Dropdown";
import { programs, schools } from "@/app/utils/constants";

export default function Sidebar() {
  return (
    <nav
      aria-label="Side Nav"
      className="fixed left-0 z-30 flex min-h-screen w-60 -translate-x-full flex-col space-y-1 bg-gray-50 transition-transform duration-200 dark:bg-black dark:text-gray-500 sm:translate-x-0"
    >
      <a
        href=""
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-300"
      >
        Home
      </a>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-300">
          <span className="text-sm font-medium"> Schools </span>
          <Dropdown />
        </summary>

        <nav
          aria-label="Users Nav"
          className="mt-2 flex flex-col space-y-1 px-4"
        >
          {schools.map((school) => (
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-300"
            >
              {school}
            </a>
          ))}
        </nav>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-300">
          <span className="text-sm font-medium"> Programs </span>
          <Dropdown />
        </summary>

        <nav
          aria-label="Account Nav"
          className="mt-2 flex flex-col space-y-1 px-4"
        >
          {programs.map((program) => (
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-300"
            >
              {program}
            </a>
          ))}
        </nav>
      </details>
    </nav>
  );
}
