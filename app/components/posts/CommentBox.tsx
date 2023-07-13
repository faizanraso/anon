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
            className="w-full resize-none rounded-lg border-gray-600 text-sm"
            placeholder="Write your comment here...."
          />
        </form>
      ) : (
        <Link href={"/login"} className="text-sm font-semibold underline">
          Login to comment
        </Link>
      )}
    </div>
  );
}
