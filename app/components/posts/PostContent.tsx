"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import CommentBox from "./CommentBox";

export default function PostContent(props: { postId: string }) {
  const [postData, setPostData] = useState<any>();

  useEffect(() => {
    async function getSelectedPost() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      const response = await fetch(
        "/api/getSelectedPost?postId=" + props.postId,
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
    <main>
      <section className="border border-gray-200 dark:border-neutral-700">
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
                <Link href={"/"}>{postData.username}</Link>
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm">{postData.content}</p>
          </div>
        </div>
      </section>
      <section className="mt-4 border border-gray-200 px-10 dark:border-neutral-700">
        <div className="py-4">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            {postData.comments.length} comment(s)
          </p>
        </div>
        {postData.comments.map((comment: any, index: any) => (
          <CommentBox comment={comment} />
        ))}
      </section>
    </main>
  );
}
