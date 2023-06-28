"use client";

import React, { useState, useEffect } from "react";
import PostCard from "./postcard";

export default async function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function retrievePosts() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      const response = await fetch(
        "http://localhost:3000/api/getPosts",
        requestOptions
      );

      if (!response.ok) {
        return;
      }

      const responsePosts = await response.json();
      setPosts(responsePosts);
    }
    retrievePosts();
    console.log(posts);
  }, [posts]);

  return (
    <>
      {posts.map(
        (
          post: {
            title: string;
            content: string;
            author: string;
            school: string;
            program: string;
          },
          index: React.Key | null | undefined
        ) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            school={post.school}
            program={post.program}
            author={"test"}
          />
        )
      )}
    </>
  );
}
