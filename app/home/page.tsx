"use client";

import { useEffect, useState } from "react";

import Modal from "../components/modal/Modal";
import PostCard from "../components/home/postcard";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function retrievePosts() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/getPosts",
          requestOptions
        );

        if (!response.ok) {
          return;
        }
        const responsePosts = await response.json();
        setPosts(responsePosts);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    retrievePosts();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Modal />
      <main className="w-full p-3 sm:ml-60">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <PostCard
            key={"index"}
            title={"post.title"}
            content={"post.content"}
            school={"post.school"}
            program={"post.program"}
            author={"test"}
          />
          <PostCard
            key={"index"}
            title={"post.title"}
            content={"post.content"}
            school={"post.school"}
            program={"post.program"}
            author={"test"}
          />{" "}
          <PostCard
            key={"index"}
            title={"post.title"}
            content={"post.content"}
            school={"post.school"}
            program={"post.program"}
            author={"test"}
          />{" "}
          <PostCard
            key={"index"}
            title={"post.title"}
            content={"post.content"}
            school={"post.school"}
            program={"post.program"}
            author={"test"}
          />{" "}
          <PostCard
            key={"index"}
            title={"post.title"}
            content={"post.content"}
            school={"post.school"}
            program={"post.program"}
            author={"test"}
          />{" "}
          <PostCard
            key={"index"}
            title={"post.title"}
            content={"post.content"}
            school={"post.school"}
            program={"post.program"}
            author={"test"}
          />
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              school={post.school}
              program={post.program}
              author={"test"}
            />
          ))}
        </div>
      </main>
    </>
  );
}
