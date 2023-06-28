import React from "react";

export default async function Posts() {
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

    const posts = await response.json();
    console.log(posts);
  }

  retrievePosts();

  return (
    <div>
      <p>hello</p>
    </div>
  );
}
