import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CommentBox() {
  const [comment, setComment] = useState<string>("");
  const { data: session, status } = useSession();

  return (
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
              <button className="inline-block rounded border border-blue-500 bg-blue-500 px-5 py-2 text-xs font-medium text-white hover:bg-transparent hover:text-blue-500 focus:outline-none focus:ring active:text-blue-400">
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
  );
}
