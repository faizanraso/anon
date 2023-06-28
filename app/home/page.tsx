"use client";

import { useState } from "react";

import Modal from "../components/modal/Modal";
import Posts from "../components/home/posts";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <Modal />
      <main className="w-full p-3 sm:ml-60">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Posts />
        </div>
      </main>
    </>
  );
}
