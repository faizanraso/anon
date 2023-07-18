"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import { programFilters, schoolFilters } from "@/app/utils/constants";
import Dropdown from "../../icons/Dropdown";
import PostModal from "../../modals/PostModal";
import MobileMenu from "./MobileMenu";
import SchoolDropdown from "./SchoolDropdown";

export default function Sidebar() {
  const pathname = usePathname();
  const [filterType, setFilterType] = useState<string>("");
  const [filterId, setFilterId] = useState<string>("");
  const { data: session, status } = useSession();

  useEffect(() => {
    const paths = pathname.split("/");
    if (paths.length > 2) {
      const filter = paths[2];
      if (schoolFilters.filter((school) => school.name === filter)) {
        setFilterType("school");
        setFilterId(paths[2]);
      } else if (programFilters.filter((program) => program.name === filter)) {
        setFilterType("program");
        setFilterId(paths[1]);
      } else {
        null;
      }
    }
  }, []);

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
            <div className="mx-auto flex w-10/12 border-0 border-b border-gray-200 dark:border-neutral-700"></div>
          </>
        ) : null}

        <nav aria-label="Side Nav" className="flex flex-col space-y-1 pt-2">
          <a
            href="/home"
            className={`block rounded-lg px-4 py-2 text-sm font-medium ${
              filterType === "none"
                ? "font-semibold text-gray-700"
                : "text-gray-500"
            } dark:bg-black dark:text-gray-200`}
          >
            Home
          </a>
          <SchoolDropdown filterId={filterId} filterType={filterType} />
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
              {programFilters.map((program, index) => (
                <a
                  key={index}
                  href={"/home/" + program.filterId}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-200"
                >
                  {program.name}
                </a>
              ))}
            </nav>
          </details>
        </nav>
      </div>
    </>
  );
}
