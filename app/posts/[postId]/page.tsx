"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PostPage({ params }: { params: { postId: string } }) {
  const [postData, setPostData] = useState<any>();

  useEffect(() => {
    async function getSelectedPost() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      const response = await fetch(
        "/api/getSelectedPost?postId=" + params.postId,
        requestOptions
      );
      const data = await response.json();

      if (!response.ok) {
        return;
      }

      setPostData(data);
    }
    getSelectedPost();
  }, []);

  if (!postData) return null;

  return (
    <div className="w-full px-7 py-3 sm:ml-60 lg:w-7/12 ">
      <div className="min-h-screen border border-gray-200 dark:border-neutral-700">
        <div className="px-10 py-5">
          <div>
            <h1 className="text-3xl font-semibold">{postData.title}</h1>
          </div>
          <div className="flex flex-row gap-2 py-5 text-gray-500 dark:text-gray-400">
            <p>
              <span className="text-sm transition duration-100 hover:text-gray-600 hover:underline dark:hover:text-gray-300">
                <Link href="/">{postData.school}</Link>
              </span>{" "}
              -{" "}
              <span className="text-sm transition duration-100 hover:text-gray-600 hover:underline dark:hover:text-gray-300">
                <Link href={"/"}>{postData.program}</Link>
              </span>{" "}
              -{" "}
              <span className="text-sm transition duration-100 hover:text-gray-600 hover:underline dark:hover:text-gray-300">
                <Link href={"/"}>{postData.author}</Link>
              </span>
            </p>
          </div>
          <div>
            <p>{postData.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
