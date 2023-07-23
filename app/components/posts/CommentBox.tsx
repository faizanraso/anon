"use client";

import React, { useState } from "react";
import { mutate } from "swr";
import { useSession } from "next-auth/react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function CommentBox(props: { postId: string }) {
  const [comment, setComment] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: session, status } = useSession();

  async function postComment(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    setIsLoading(true);

    const postId = props.postId;

    const body = {
      comment,
      postId,
    };

    setComment("");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const response = await fetch("/api/postComment", requestOptions);

    if (!response.ok) {
      toast.error("Woah, something went wrong", {
        className: "text-sm dark:bg-neutral-800 dark:text-white",
        duration: 3000,
      });
      setIsLoading(false);
      return;
    }

    mutate("/api/getComments?postId=" + props.postId);
    setIsLoading(false);
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex w-full flex-row justify-center">
        {status === "authenticated" ? (
          <form className="w-full">
            <textarea
              value={comment}
              className="w-full resize-none rounded border bg-transparent px-3 py-1 text-sm transition-all duration-100 ease-linear dark:border-neutral-700"
              placeholder="Write your comment here...."
              rows={4}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex w-full justify-end">
              {" "}
              {comment.length < 1 || isLoading ? (
                <button
                  className="inline-block rounded border border-neutral-300 px-5 py-2 text-xs font-medium text-neutral-300 focus:outline-none dark:border-neutral-800  dark:text-neutral-500"
                  disabled
                >
                  Post
                </button>
              ) : (
                <button
                  onClick={(e) =>
                    toast.promise(
                      postComment(e),
                      {
                        loading: <p className="text-sm">Posting...</p>,
                        success: <b className="text-sm">Comment posted</b>,
                        error: <b className="text-sm">Could not post.</b>,
                      },
                      {
                        className:
                          "text-sm dark:bg-neutral-800 dark:text-white",
                        duration: 3000,
                      }
                    )
                  }
                  className="inline-block rounded border border-black bg-transparent px-5 py-2 text-xs font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                >
                  Post
                </button>
              )}
            </div>
          </form>
        ) : (
          <Link href={"/login"} className="text-sm font-semibold underline">
            Login to comment
          </Link>
        )}
      </div>
    </>
  );
}
