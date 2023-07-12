import Link from "next/link";
import React from "react";

export default function CommentBox() {
  return (
    <div className="">
      <div className="flex flex-col gap-y-4 border-t border-gray-200 py-4 dark:border-neutral-700">
        <p className="text-xs">
          {" "}
          <Link
            href="/"
            className="transition duration-100 hover:text-gray-600 hover:underline dark:hover:text-gray-300"
          >
            school name
          </Link>{" "}
          <span>|</span>{" "}
          <Link
            href={"/"}
            className="transition duration-100 hover:text-gray-600 hover:underline dark:hover:text-gray-300"
          >
            @username
          </Link>
        </p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris
          elit, feugiat a maximus sed, rhoncus nec sapien. Vivamus vitae
          sagittis libero, vel dictum justo. Nunc quis nunc non nisi mattis
          feugiat.
        </p>
        <div className="flex flex-row items-center gap-x-1">
          <svg
            width="15px"
            height="15px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-none dark:stroke-gray-300"
          >
            <path
              d="M12 6v6h6"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="fill-none dark:stroke-gray-300"
            ></path>
            <path
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="fill-none dark:stroke-gray-300"
            ></path>
          </svg>
          <p className="text-sm">Date</p>
        </div>
      </div>
    </div>
  );
}
