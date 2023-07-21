import { programFilters } from "@/app/utils/constants";
import Dropdown from "../../icons/Dropdown";

export default function ProgramDropdown(props: {
  filterType: string;
  filterId: string;
}) {
  const constantClasses =
    "block rounded-lg px-4 py-2 text-sm font-medium hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-black dark:hover:text-neutral-200";

  return (
    <>
      {props.filterType === "" ? (
        <details
          open
          className="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-neutral-500 hover:text-neutral-700  dark:text-neutral-400 dark:hover:bg-black dark:hover:text-neutral-200">
            <span className="text-sm font-semibold"> Programs </span>
            <Dropdown />
          </summary>
          <nav
            aria-label="Program Nav"
            className="mt-2 flex flex-col space-y-1 px-4"
          >
            {programFilters.map((program, index) => (
              <a
                key={program.filterId}
                href={"/home/" + program.filterId}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-black dark:hover:text-neutral-200"
              >
                {program.name}
              </a>
            ))}
          </nav>
        </details>
      ) : props.filterType !== "program" ? (
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-neutral-500 hover:text-neutral-700  dark:text-neutral-400 dark:hover:bg-black dark:hover:text-neutral-200">
            <span className="text-sm font-semibold"> Programs </span>
            <Dropdown />
          </summary>
          <nav
            aria-label="Program Nav"
            className="mt-2 flex flex-col space-y-1 px-4"
          >
            {programFilters.map((program, index) => (
              <a
                key={program.filterId}
                href={"/home/" + program.filterId}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-black dark:hover:text-neutral-200"
              >
                {program.name}
              </a>
            ))}
          </nav>
        </details>
      ) : (
        <details
          open
          className="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-neutral-500 hover:text-neutral-700  dark:text-neutral-400 dark:hover:bg-black dark:hover:text-neutral-200">
            <span className="text-sm font-semibold"> Programs </span>
            <Dropdown />
          </summary>
          <nav
            aria-label="Progra, Nav"
            className="mt-2 flex flex-col space-y-1 px-4"
          >
            {programFilters.map((program, index) => (
              <a
                key={program.filterId}
                href={"/home/" + program.filterId}
                className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                  program.filterId === props.filterId
                    ? "font-semibold text-neutral-700"
                    : "text-neutral-500"
                } hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-black dark:hover:text-neutral-200`}
              >
                {program.name}
              </a>
            ))}
          </nav>
        </details>
      )}
    </>
  );
}
