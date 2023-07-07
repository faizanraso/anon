import React from "react";

export default function PostPage({ params }: { params: { postId: string } }) {
  return (
    <div className="w-full p-3 sm:ml-60">
      <p>{params.postId}</p>
    </div>
  );
}
