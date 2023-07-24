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
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  const { data, error, isLoading } = useSWR(
    "/api/getFIlteredPosts?filterId=" + params.filterId + "&page=" + page,
    fetcher
  );

  useEffect(() => {
    data ? setPosts(data.posts) : null;
    data ? setMaxPage(Math.floor(data.count / 12) + 1) : null;
    data ? console.log(Math.floor(data.count / 12) + 1) : null;
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
        <section className="flex w-full items-center justify-center gap-x-2 p-5 ">
          {page === 1 ? (
            <button disabled>
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="text-neutral-300 dark:text-neutral-700"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.25 6.75L4.75 12L10.25 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.25 12H5"
                ></path>
              </svg>
            </button>
          ) : (
            <button onClick={() => setPage(page - 1)}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.25 6.75L4.75 12L10.25 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.25 12H5"
                ></path>
              </svg>
            </button>
          )}

          {page >= maxPage ? (
            <button disabled>
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="text-neutral-300 dark:text-neutral-700"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H4.75"
                ></path>
              </svg>
            </button>
          ) : (
            <button onClick={() => setPage(page + 1)}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H4.75"
                ></path>
              </svg>
            </button>
          )}
        </section>
        <section>
          {posts && posts.length > 0 ? (
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
          ) : (
            <div className="flex items-center justify-center justify-items-center py-3">
              <p className="text-md font-medium">
                Looks like there are no posts in this category yet.
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
