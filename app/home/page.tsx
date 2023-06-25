"use client";

import { useEffect, useState } from "react";
import Modal from "../components/modal/Modal";
import PostCard from "../components/home/postcard";

export default function Home() {
  return (
    <>
      <Modal />
      <main className="w-full p-3 sm:ml-60">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <PostCard
            title="Test Post"
            postText="This is a long piece of text that will be used for the post sneak peak."
          />
          <PostCard
            title="Test Post"
            postText="This is a long piece of text that will be used for the post sneak peak."
          />
          <PostCard
            title="Test Post"
            postText="This is a long piece of text that will be used for the post sneak peak."
          />
        </div>
      </main>
    </>
  );
}
