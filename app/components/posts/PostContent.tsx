"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import CommentBox from "./CommentBox";
import { fetcher } from "@/app/utils/fetcher";
import useSWR from "swr";
import CommentContext from "../../context/CommentContext";

export default function PostContent(props: { postId: string }) {
  const [schoolFilter, setSchoolFilter] = useState<string>("");
  const [programFilter, setProgramFilter] = useState<string>("");

  const { data, error, isLoading } = useSWR(
    "/api/getSelectedPost?postId=" + props.postId,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setSchoolFilter(data.school.toLowerCase().replace(/[^a-z0-9]/g, ""));
      setProgramFilter(data.program.toLowerCase().replace(/[^a-z0-9]/g, ""));
    }
  }, [data]);

  if (!data) return null;

  if (isLoading) return null;

  if (error) return "error";

  return (
    <main className="flex flex-col sm:ml-60 lg:w-7/12">
      <section className="py-4">
        <div className="border border-neutral-200 px-10 py-5 dark:border-neutral-700">
          <div>
            <h1 className="text-3xl font-semibold">{data.title}</h1>
          </div>
          <div className="flex flex-row gap-2 py-5 text-neutral-500 dark:text-neutral-400">
            <p>
              <span className="text-sm transition duration-100 hover:text-neutral-600 hover:underline dark:hover:text-neutral-300">
                <Link href={"/home/" + schoolFilter}>{data.school}</Link>
              </span>{" "}
              -{" "}
              <span className="text-sm transition duration-100 hover:text-neutral-600 hover:underline dark:hover:text-neutral-300">
                <Link href={"/home/" + programFilter}>{data.program}</Link>
              </span>{" "}
              -{" "}
              <span className="text-sm transition duration-100 hover:text-neutral-600 hover:underline dark:hover:text-neutral-300">
                <Link href={"/user/" + data.username}>{data.username}</Link>
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm">{data.content}</p>
          </div>
        </div>
      </section>
      <CommentContext>
        <section className="flex w-full border border-neutral-200 px-10 py-4 dark:border-neutral-700">
          <CommentBox postId={data.post_id} />
        </section>
        <section className="mt-4 border border-neutral-200 px-10  dark:border-neutral-700">
          <Comments postId={data.post_id} />
        </section>
      </CommentContext>
    </main>
  );
}
