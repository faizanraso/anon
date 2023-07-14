import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
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
  } catch (e) {
    console.log(e);
  }
}
