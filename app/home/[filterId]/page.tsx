"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

import InfoModal from "@/app/components/modals/InfoModal";
import PostCard from "@/app/components/home/postcard";
import { fetcher } from "@/app/utils/fetcher";

export default function FilteredHome({
  params,
}: {
  params: { filterId: string };
}) {
  const [posts, setPosts] = useState<any[]>([]);

  const { data, error, isLoading } = useSWR(
    "/api/getFIlteredPosts?filterId=" + params.filterId,
    fetcher
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  if (isLoading) {
    return null;
  }

  if (error) {
    return "error";
  }

  return (
    <>
      <InfoModal />
      <main className="w-full p-3 sm:ml-60">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post) => (
            <PostCard
              key={post.post_id}
              title={post.title}
              content={post.content}
              school={post.school}
              program={post.program}
              username={post.username}
              postId={post.post_id}
            />
          ))}
        </div>
      </main>
    </>
  );
}
