import React from "react";

export default function PostCard(props: { title: string; postText: string }) {
  return (
    <div className="px-5 md:px-1">
      <div className="w-full rounded-md border border-black p-5 dark:border-gray-400">
        <div className="flex flex-row justify-end gap-x-2 pb-1 text-right">
          <p className="rounded-full bg-sky-200 px-1.5 py-1 text-[10px] text-black">
            school name
          </p>
          <p className="rounded-full bg-violet-200 px-1.5 py-1 text-[10px] text-black">
            program name
          </p>
        </div>
        <div className="pb-1.5">
          <h1 className="text-md font-semibold">{props.title}</h1>
        </div>
        <div className="pt-1.5">
          <p className="text-sm">{props.postText}</p>
        </div>
        <div className="pt-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">author</p>
        </div>
      </div>
    </div>
  );
}
