import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  try {
    const comments = await prisma.comment.findMany({
      orderBy: { creation_time: "desc" },
      where: { post_id: postId! },
    });
    return NextResponse.json(comments);
  } catch (e) {
    return e;
  }
}
