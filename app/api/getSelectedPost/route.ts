import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId");

    const postData = await prisma.post.findFirst({
      where: { post_id: postId! },
    });

    return NextResponse.json(postData);
  } catch (e) {
    return e;
  }
}
