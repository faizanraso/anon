"use client";

import React from "react";

export default async function PostButton(props: { sessionStatus: any }) {
  return (
    <>
      {props.sessionStatus ? (
        <div className="flex flex-col items-center justify-center pb-3 pt-5">
          <button className="inline-block rounded border border-blue-500 bg-blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-500 focus:outline-none focus:ring active:text-blue-400">
            Write a Post
          </button>
          <div className="w-10/12 border-0 border-b border-gray-200 pt-5 dark:border-gray-500"></div>
        </div>
      ) : null}
    </>
  );
}
