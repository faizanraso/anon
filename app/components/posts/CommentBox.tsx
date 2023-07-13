import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CommentBox() {
  const { data: session, status } = useSession();

  return (
    <div className="flex w-full flex-row justify-center">
      {status === "authenticated" ? (
        <form className="w-full">
          <textarea
            className="w-full resize-none rounded border bg-transparent px-3 py-1 text-sm transition-all duration-100 ease-linear"
            placeholder="Write your comment here...."
          />
          <div className="flex w-full justify-end">
            {" "}
            <button className="inline-block rounded border border-blue-500 bg-blue-500 px-5 py-2 text-xs font-medium text-white hover:bg-transparent hover:text-blue-500 focus:outline-none focus:ring active:text-blue-400">
              Post
            </button>
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
