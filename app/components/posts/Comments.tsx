"use client";

import React, { useContext, useEffect, useState } from "react";
import { fetcher } from "@/app/utils/fetcher";
import useSWR from "swr";
import Link from "next/link";
import compareDates from "@/app/utils/compareDates";
import getFilterID from "@/app/utils/getFilterID";
import { CommentContext } from "@/app/context/CommentContext";

export default function Comments(props: { postId: string }) {
  const [comments, setComments] = useState<any>();
  const [commentLevel, setCommentLevel] = useContext(CommentContext);
  const [totalComments, setTotalComments] = useState<number>(0);

  const { data, error, isLoading } = useSWR(
    "/api/getComments?postId=" + props.postId + "&commentLevel=" + commentLevel,
    fetcher
  );

  useEffect(() => {
    data ? setComments(data.comments) : null;
    data ? setTotalComments(data.count) : null;
  }, [data]);

  if (isLoading) return null;

  if (error) return "error";

  return (
    <>
      <div className="py-4">
        <p className="text-xs text-neutral-700 dark:text-neutral-300">
          {totalComments} comment(s)
        </p>
      </div>
      {comments
        ? comments.map(
            (comment: {
              school: string;
              username: string;
              comment: string;
              creation_time: string;
            }) => (
              <div key={comment.username + comment.creation_time}>
                <div className="flex flex-col gap-y-4 border-t border-neutral-200 py-4 dark:border-neutral-700">
                  <p className="text-xs">
                    {" "}
                    <Link
                      href={"/home/" + getFilterID(comment.school)}
                      className="transition duration-100 hover:text-neutral-600 hover:underline dark:hover:text-neutral-300"
                    >
                      {comment.school}
                    </Link>{" "}
                    <span>|</span>{" "}
                    <Link
                      href={"/"}
                      className="transition duration-100 hover:text-neutral-600 hover:underline dark:hover:text-neutral-300"
                    >
                      @{comment.username}
                    </Link>
                  </p>
                  <p className="text-xs">{comment.comment}</p>
                  <div className="flex flex-row items-center gap-x-1">
                    <svg
                      width="10px"
                      height="10px"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-none dark:stroke-neutral-300"
                    >
                      <path
                        d="M12 6v6h6"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="fill-none dark:stroke-neutral-300"
                      ></path>
                      <path
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="fill-none dark:stroke-neutral-300"
                      ></path>
                    </svg>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300">
                      {compareDates(comment.creation_time)}
                    </p>
                  </div>
                </div>
              </div>
            )
          )
        : null}
      {totalComments > 3 * commentLevel ? (
        <div className="w-full items-center justify-center text-center">
          <button
            onClick={() => setCommentLevel(commentLevel + 1)}
            className="p-3 text-xs font-medium"
          >
            Load more...
          </button>
        </div>
      ) : null}
    </>
  );
}
