import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function PostModal() {
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
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] text-black shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-[17px] font-medium">
            Write a Post
          </Dialog.Title>
          {/* <Dialog.Description className="mb-5 mt-[10px] text-[15px] leading-normal">
            We need some more information before you can start using anon.
          </Dialog.Description> */}
          <form
            onSubmit={(e) => {
              submitPost(e);
            }}
          >
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px]"
                htmlFor="title"
              >
                Username
              </label>
              <input
                className="inline-flex h-[38px] w-full flex-1 items-center justify-center rounded-[4px] bg-white px-[10px] text-[15px] shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="title"
                required
                minLength={1}
                onChange={(e) => setPostTitle(e.target.value)}
              />
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <button
                type="submit"
                className="inline-flex h-[35px] items-center justify-center rounded-[4px] border border-black px-[15px] font-medium transition duration-100 hover:scale-105 focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Save changes
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
