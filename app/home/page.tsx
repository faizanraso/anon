"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

import InfoModal from "../components/modals/InfoModal";
import PostCard from "../components/home/postcard";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  const fetcher = (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/getAllPosts", fetcher);

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
              author={post.author}
              postId={post.post_id}
            />
          ))}
        </div>
      </main>
    </>
  );
}
