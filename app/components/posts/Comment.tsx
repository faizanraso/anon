import Link from "next/link";
import React from "react";

export default function Comment(props: { comment: any }) {
  function compareDates(creation_time: string) {
    const postDate = new Date(creation_time.slice(0, 10));

    return (
      postDate.toLocaleString("default", { month: "long" }) +
      " " +
      postDate.getDate() +
      ", " +
      postDate.getFullYear()
    );
  }

  return (
    <div className="">
      <div className="flex flex-col gap-y-4 border-t border-gray-200 py-4 dark:border-neutral-700">
        <p className="text-xs">
          {" "}
          <Link
            href="/"
            className="transition duration-100 hover:text-gray-600 hover:underline dark:hover:text-gray-300"
          >
            {props.comment.school}
          </Link>{" "}
          <span>|</span>{" "}
          <Link
            href={"/"}
            className="transition duration-100 hover:text-gray-600 hover:underline dark:hover:text-gray-300"
          >
            @{props.comment.username}
          </Link>
        </p>
        <p className="text-xs">{props.comment.comment}</p>
        <div className="flex flex-row items-center gap-x-1">
          <svg
            width="10px"
            height="10px"
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
          <p className="text-xs text-gray-600 dark:text-gray-300">
            {compareDates(props.comment.creation_time)}
          </p>
        </div>
      </div>
    </div>
  );
}
