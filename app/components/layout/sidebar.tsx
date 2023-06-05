import React from "react";
import Dropdown from "../icons/Dropdown";

export default function Sidebar() {
  const schools = [
    "Carleton University",
    "Centennial College",
    "Concordia University",
    "Conestoga College",
    "Dalhousie University",
    "Durham College",
    "Fanshawe College",
    "George Brown College",
    "Humber College",
    "McGill University",
    "McMaster University",
    "Mohawk College",
    "Queen's University",
    "Ryerson University",
    "Seneca College",
    "Sheridan College",
    "Simon Fraser University",
    "University of Alberta",
    "University of British Columbia",
    "University of Calgary",
    "University of Guelph",
    "University of Manitoba",
    "University of Montreal",
    "University of Ottawa",
    "University of Saskatchewan",
    "University of Toronto",
    "University of Victoria",
    "University of Waterloo",
    "Western University",
    "Wilfrid Laurier University",
    "York University",
  ];

  const programs = [
    "Arts and Humanities",
    "Business and Management",
    "Engineering",
    "Health and Medicine",
    "Social Sciences",
    "Education",
    "Computer Science",
    "Fine Arts and Design",
    "Law and Legal Studies",
    "Social Work",
    "Architecture",
    "Agriculture and Environmental Sciences",
    "Communications and Media",
    "Language and Linguistics",
    "Hospitality and Tourism",
    "Psychology",
    "Mathematics and Statistics",
    "Physical Education and Sports",
    "Other",
  ];

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
