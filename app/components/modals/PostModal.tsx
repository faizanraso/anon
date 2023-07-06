"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function PostModal(props: { sessionStatus: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [postLength, setPostLength] = useState<number>(0);

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
            <button className="inline-block rounded border border-blue-500 px-12 py-3 text-sm font-semibold text-blue-500 hover:bg-blue-400 hover:text-white focus:outline-none focus:ring active:text-white">
              Write a Post
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0" />
            <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Dialog.Title className="my-5 text-[17px] font-medium text-black">
                Write a Post 💭
              </Dialog.Title>
              <form onSubmit={(e) => submitPost(e)}>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <input
                    className="w-full rounded-lg border border-gray-600 p-3 text-sm"
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
                    className="w-full resize-none rounded-lg border-gray-600 p-3 text-sm"
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
                  <button
                    type="submit"
                    className="inline-block rounded border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-white"
                  >
                    Post
                  </button>
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
