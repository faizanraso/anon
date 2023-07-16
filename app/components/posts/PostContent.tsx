"use client";

import Link from "next/link";
import React from "react";
import Comments from "./Comments";
import CommentBox from "./CommentBox";
import useSWR from "swr";

export default function PostContent(props: { postId: string }) {
  const fetcher = (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "/api/getSelectedPost?postId=" + props.postId,
    fetcher
  );

  if (!data) return null;

  if (isLoading) return null;

  if (error) return "error";

  return (
    <main>
      <section className="py-4">
        <div className="border border-gray-200 px-10 py-5 dark:border-neutral-700">
          <div>
            <h1 className="text-3xl font-semibold">{data.title}</h1>
          </div>
          <div className="flex flex-row gap-2 py-5 text-gray-500 dark:text-gray-400">
            <p>
              <span className="text-sm transition duration-100 hover:text-gray-600 hover:underline dark:hover:text-gray-300">
                <Link href="/">{data.school}</Link>
              </span>{" "}
              -{" "}
              <span className="text-sm transition duration-100 hover:text-gray-600 hover:underline dark:hover:text-gray-300">
                <Link href={"/"}>{data.program}</Link>
              </span>{" "}
              -{" "}
              <span className="text-sm transition duration-100 hover:text-gray-600 hover:underline dark:hover:text-gray-300">
                <Link href={"/"}>{data.username}</Link>
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm">{data.content}</p>
          </div>
        </div>
      </section>
      <section className="flex w-full border border-gray-200 px-10 py-4 dark:border-neutral-700">
        <CommentBox postId={data.post_id} />
      </section>
      <section className="mt-4 border border-gray-200 px-10  dark:border-neutral-700">
        <div className="py-4">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            {data.comments.length} comment(s)
          </p>
        </div>
        <Comments postId={data.post_id} />
      </section>
    </main>
  );
}
