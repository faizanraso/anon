"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

import InfoModal from "../components/modals/InfoModal";
import PostCard from "../components/home/postcard";
import { fetcher } from "@/app/utils/fetcher";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  const { data, error, isLoading } = useSWR("/api/getAllPosts", fetcher);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  if (isLoading) {
    return null;
  }

  if (error) {
    toast.error("Looks like something went wrong.", {
      className: "text-sm",
      duration: 3000,
    });
  }

  return (
    <>
      <InfoModal />
      <Toaster position="top-right" reverseOrder={false} />
      <main className="w-full p-3 sm:ml-60">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map(
            (post: {
              post_id: string;
              title: string;
              content: string;
              school: string;
              program: string;
              username: string;
            }) => (
              <PostCard
                key={post.post_id}
                title={post.title}
                content={post.content}
                school={post.school}
                program={post.program}
                username={post.username}
                postId={post.post_id}
              />
            )
          )}
        </div>
      </main>
    </>
  );
}
