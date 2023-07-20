"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function CommentBox(props: { postId: string }) {
  const [comment, setComment] = useState<string>("");
  const { data: session, status } = useSession();

  async function postComment(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    const postId = props.postId;

    const body = {
      comment,
      postId,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const response = await fetch("/api/postComment", requestOptions);

    if (!response.ok) {
      return;
    }

  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex w-full flex-row justify-center">
        {status === "authenticated" ? (
          <form className="w-full">
            <textarea
              className="w-full resize-none rounded border bg-transparent px-3 py-1 text-sm transition-all duration-100 ease-linear dark:border-neutral-700"
              placeholder="Write your comment here...."
              rows={4}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex w-full justify-end">
              {" "}
              {comment.length >= 1 ? (
                <button
                  onClick={(e) =>
                    toast.promise(postComment(e), {
                      loading: "Saving...",
                      success: <b>Settings saved!</b>,
                      error: <b>Could not save.</b>,
                    })
                  }
                  className="inline-block rounded border border-blue-500 bg-blue-500 px-5 py-2 text-xs font-medium text-white hover:bg-transparent hover:text-blue-500 focus:outline-none focus:ring active:text-blue-400"
                >
                  Post
                </button>
              ) : (
                <button
                  className="inline-block rounded border border-blue-200 bg-blue-200 px-5 py-2 text-xs font-medium text-white focus:outline-none dark:border-blue-900 dark:bg-blue-900 dark:text-gray-500"
                  disabled
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
