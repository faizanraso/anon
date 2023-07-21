import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const { comment, postId } = body;

    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email! },
    });

    const post = await prisma.post.findUnique({
      where: { post_id: postId },
    });

    const createdComment = await prisma.comment.create({
      data: {
        comment,
        userId: user?.id!,
        username: user?.username!,
        school: user?.school!,
        post_id: post?.post_id!,
      },
    });

    return NextResponse.json({ message: "posted" });
    
  } catch (e) {
    console.error("Error processing request:", e);
    return res.status(500).json({ error: "Internal server error" });
  }
}
