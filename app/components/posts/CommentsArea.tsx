import React from "react";
import CommentBox from "./CommentBox";

export default function CommentsArea() {
  return (
    <section className="mt-4 border border-gray-200 px-10 dark:border-neutral-700">
      <div className="py-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          total comments
        </p>
      </div>
      <CommentBox />
    </section>
  );
}
