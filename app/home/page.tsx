"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

import InfoModal from "../components/modals/InfoModal";
import PostCard from "../components/home/postcard";
import { fetcher } from "@/app/utils/fetcher";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number | undefined>();

  const { data, error, isLoading } = useSWR(
    "/api/getAllPosts?scrollLevel=" + page,
    fetcher
  );

  useEffect(() => {
    setPosts(data);
    data ? setMaxPage((data.length % 12) + 1) : null;
  }, [data]);

  if (isLoading) {
    return null;
  }

  if (error) {
    toast.error("Looks like something went wrong.", {
      className: "text-sm dark:bg-neutral-800 dark:text-white",
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
        <div className="flex w-full items-center justify-center gap-x-2 p-5">
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
            <button>
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

          {maxPage === page ? (
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
            <button>
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
        </div>
      </main>
    </>
  );
}
