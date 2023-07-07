"use client";

import React, { useEffect, useState } from "react";

export default function PostPage({ params }: { params: { postId: string } }) {
  const [postData, setPostData] = useState<any>();

  useEffect(() => {
    async function getSelectedPost() {
      const postId = params.postId;
      const body = {
        postId,
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      const response = await fetch("/api/getSelectedPost", requestOptions);
      const data = await response.json();

      console.log(data);
      if (!response.ok) {
        return;
      }
      setPostData(data);
    }
    getSelectedPost();
  }, []);

  return (
    <div className="w-full p-3 sm:ml-60">
      <p>{}</p>
    </div>
  );
}
