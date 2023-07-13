"use client";

import PostContent from "@/app/components/posts/PostContent";
import React from "react";

export default function PostPage({ params }: { params: { postId: string } }) {
  return (
    <div className="w-full px-7 py-3 sm:ml-60 lg:w-7/12 ">
      <PostContent postId={params.postId} />
    </div>
  );
}
