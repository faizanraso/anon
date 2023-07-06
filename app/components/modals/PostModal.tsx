"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function PostModal(props: { sessionStatus: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");

  async function submitPost(e: React.FormEvent<HTMLFormElement>) {
    const body = {
      postTitle,
      postContent,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const response = await fetch("/api/submitPost", requestOptions);

    if (!response.ok) {
      return;
    }

    setOpen(false);
    e.preventDefault();
  }

  return (
    <>
      {props.sessionStatus ? (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="inline-block rounded border border-blue-500 bg-blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-500 focus:outline-none focus:ring active:text-blue-400">
              Edit profile
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0" />
            <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Dialog.Title className="my-5 text-[17px] font-medium text-black">
                Write a Post
              </Dialog.Title>

              <fieldset className="mb-[15px] flex items-center gap-5">
                <input
                  className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                  id="title"
                  placeholder="Post Title"
                />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <textarea
                  className="w-full rounded-lg border-gray-600 p-3 text-sm"
                  placeholder="Write your thoughts here..."
                  rows={9}
                  id="post"
                  maxLength={250}
                ></textarea>
              </fieldset>
              <div className="mt-[25px] flex justify-end">
                <Dialog.Close asChild>
                  <button className="inline-block rounded border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-white">
                    Post
                  </button>
                </Dialog.Close>
              </div>
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
                    color="#000000"
                  >
                    <path
                      d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ) : null}
    </>
  );
}
