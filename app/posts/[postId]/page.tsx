"use client";

import InfoModal from "@/app/components/modals/InfoModal";
import PostContent from "@/app/components/posts/PostContent";
import SuggestedPosts from "@/app/components/posts/SuggestedPosts";
import React, { useEffect, useState } from "react";

export default function PostPage({ params }: { params: { postId: string } }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <InfoModal />
      <div className="flex w-full flex-row px-7 py-3">
        <div className="flex flex-col sm:ml-60 lg:w-7/12">
          <PostContent postId={params.postId} />
        </div>
        <div className="hidden pl-5 pt-4 lg:flex lg:flex-1">
          {mounted ? <SuggestedPosts /> : null}
        </div>
      </div>
    </>
  );
}
