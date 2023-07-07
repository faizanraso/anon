"use client";

import React, { useEffect, useState } from "react";

export default function PostPage({ params }: { params: { postId: string } }) {
  const [postData, setPostData] = useState<any>();

  useEffect(() => {
    async function getSelectedPost() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      const response = await fetch(
        "/api/getSelectedPost?postId=" + params.postId,
        requestOptions
      );
      const data = await response.json();

      if (!response.ok) {
        return;
      }

      setPostData(data);
    }
    getSelectedPost();
  }, []);

  return (
    <div className="w-full px-8 py-3 sm:ml-60">
      <p>asda</p>
    </div>
  );
}
