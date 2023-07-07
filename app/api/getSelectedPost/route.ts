import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { postId } = body;
    const postData = await prisma.post.findFirst({
      where: { post_id: postId },
    });
    return NextResponse.json(postData);
  } catch (e) {
    return e;
  }
}
