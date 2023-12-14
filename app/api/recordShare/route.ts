import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const { shareType, postId } = body;

    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email! },
    });

    const post = await prisma.post.findUnique({
      where: { post_id: postId },
    });

    const shareRecord = await prisma.share.create({
      data: {
        userId: user?.id!,
        username: user?.username!,
        school: user?.school!,
        post_id: post?.post_id!,
        shareType: "twitter",
      },
    });

    return NextResponse.json({ message: "shared record saved" });
  } catch (e) {
    console.error("Error processing request:", e);
    return res.status(500).json({ error: "Internal server error" });
  }
}
