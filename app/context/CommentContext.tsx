import React, { createContext, useState } from "react";

export const CommentContext = createContext<any[]>([]);

export default function CommentProvider({ children }: any) {
  const [commentLevel, setCommentLevel] = useState(1);
  return (
    <CommentContext.Provider value={[commentLevel, setCommentLevel]}>
      {children}
    </CommentContext.Provider>
  );
}
