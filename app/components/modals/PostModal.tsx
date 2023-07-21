"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { mutate } from "swr";

export default function PostModal(props: { sessionStatus: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [postLength, setPostLength] = useState<number>(0);

  async function submitPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const body = {
      postTitle,
      postContent,
    };

    setPostTitle("");
    setPostContent("");
    setPostLength(0);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const response = await fetch("/api/submitPost", requestOptions);

    if (!response.ok) {
      toast.error("Something went wrong", {
        className: "text-sm dark:bg-neutral-800 dark:text-white",
        duration: 3000,
      });
      return;
    }

    mutate("/api/getAllPosts");
    setOpen(false);
    setIsLoading(false);
  }

  return (
    <>
      {props.sessionStatus ? (
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="inline-block rounded border border-black px-12 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:text-white dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Write a Post 💭
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0" />
            <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none dark:border dark:border-neutral-700 dark:bg-black">
              <Dialog.Title className="my-5 text-[17px] font-medium">
                Write a Post 💭
              </Dialog.Title>
              <form
                onSubmit={(e) => {
                  toast.promise(
                    submitPost(e),
                    {
                      loading: <p className="text-sm">Posting...</p>,
                      success: <b className="text-sm">Post created</b>,
                      error: <b className="text-sm">Could not post.</b>,
                    },
                    {
                      className: "text-sm dark:bg-neutral-800 dark:text-white",
                      duration: 3000,
                    }
                  );
                }}
              >
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <input
                    className="w-full rounded-lg border border-gray-600 bg-transparent p-3 text-sm"
                    id="title"
                    placeholder="Post Title"
                    type="text"
                    required
                    minLength={3}
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <textarea
                    className="w-full resize-none rounded border bg-transparent px-3 py-1 text-sm transition-all duration-100 ease-linear dark:border-neutral-700"
                    placeholder="Write your thoughts here..."
                    rows={8}
                    id="post"
                    minLength={3}
                    maxLength={2500}
                    required
                    onChange={(e) => {
                      setPostContent(e.target.value);
                      setPostLength(e.target.value.length);
                    }}
                  />
                </fieldset>
                <div className="mt-[25px] flex justify-between">
                  <p className="text-xs text-gray-500">{postLength}/2500</p>
                  {!isLoading ? (
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-[4px] border border-black px-5 py-2 font-medium transition duration-100 hover:scale-105 focus:shadow-[0_0_0_2px] focus:outline-none dark:border-neutral-700"
                    >
                      Post
                    </button>
                  ) : (
                    <button
                      disabled
                      type="submit"
                      className="inline-flex items-center justify-center rounded-[4px] border border-gray-400 px-5 py-2 font-medium text-gray-400 dark:border-neutral-700 dark:text-gray-500"
                    >
                      Post
                    </button>
                  )}
                </div>
              </form>

              <Dialog.Close asChild>
                <button
                  className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  <svg
                    width="24px"
                    height="24px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                      stroke-width="1.5"
                      className="stroke-black dark:stroke-gray-500"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ) : (
        <Link href={"/login"}>
          <button className="inline-block rounded border border-blue-500 px-12 py-3 text-sm font-semibold text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring active:text-white">
            Write a Post 💭
          </button>
        </Link>
      )}
    </>
  );
}
