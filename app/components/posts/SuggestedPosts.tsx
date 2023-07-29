"use client";

import { fetcher } from "@/app/utils/fetcher";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function SuggestedPosts() {
  const [posts, setPosts] = useState<any[]>([]);
  const { data, error, isLoading } = useSWR("/api/getSuggestedPosts", fetcher);

  useEffect(() => {
    data ? setPosts(data) : null;
  }, [data]);

  if (error) return null;
  if (isLoading) return null;

  return (
    <>
      {posts ? (
        <section className="w-full ">
          <div className="fixed border border-neutral-200 dark:border-neutral-700 lg:w-2/12">
            <div className="px-3 py-2 ">
              <h1 className="font-semibold">Suggested Posts</h1>
            </div>
            {posts.map((post) => (
              <Link href={"/posts/" + post.post_id} key={post.post_id}>
                <div className="border-t border-neutral-200 px-3 py-3 transition duration-100 dark:border-neutral-700">
                  <p className="text-sm">{post.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
