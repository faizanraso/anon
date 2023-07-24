import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");
  const scroll = Number(searchParams.get("commentLevel"));

  try {
    const count = await prisma.comment.count({ where: { post_id: postId! } });
    const comments = await prisma.comment.findMany({
      take: scroll * 3,
      orderBy: { creation_time: "desc" },
      where: { post_id: postId! },
    });
    return NextResponse.json({ comments, count });
  } catch (e) {
    return e;
  }
}
