import Link from "next/link";
import React from "react";

export default function PostCard(props: {
  title: string;
  content: string;
  school: string;
  program: string;
  author: string;
}) {
  // modify post content display
  const postContent = (content: string) => {
    let truncated = content.substring(0, 125);
    let length = 125;

    while (truncated[length - 1] !== " ") {
      length--;
      truncated = content.substring(0, length);
    }
    return truncated.substring(0, length - 1) + "...";
  };

  return (
    <Link href={"/"}>
      <div className="px-5 md:px-1">
        <div className="relative h-56 max-h-56 w-full rounded-md border border-black p-5 transition duration-150 hover:shadow-md dark:border-neutral-700 dark:shadow-gray-500">
          <div className="flex flex-row justify-end gap-x-2 pb-1 text-right">
            <p className="rounded-full bg-sky-200 px-1.5 py-1 text-[10px] text-black">
              {props.school}
            </p>
            <p className="rounded-full bg-violet-200 px-1.5 py-1 text-[10px] text-black">
              {props.program}
            </p>
          </div>
          <div className="py-1.5">
            <h1 className="text-md font-semibold">{props.title}</h1>
          </div>
          <div className="py-1.5">
            <p className="text-sm">{postContent(props.content)}</p>
          </div>
          <div className="absolute bottom-3">
            <p className="text-xs text-gray-500 dark:text-gray-400 ">
              {props.author}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
