import { programs, schools } from "@/app/utils/constants";
import React from "react";
import Dropdown from "../icons/Dropdown";

export default function () {
  return (
    <>
      <div className="fixed inset-0 top-0 hidden w-60 overflow-y-auto bg-white sm:block">
        <div className="h-16">.</div>
        <nav aria-label="Side Nav" className="flex flex-col space-y-1">
          <a
            href=""
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            Home
          </a>
          <details
            open
            className="group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium"> Programs </span>
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
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  {program}
                </a>
              ))}
            </nav>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium"> Schools </span>
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
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  {school}
                </a>
              ))}
            </nav>
          </details>
        </nav>
      </div>
    </>
  );
}
