import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const { postTitle, postContent } = body;
    const user = await prisma.user.findFirst({
      where: { email: session?.user?.email },
    });
    await prisma.post.create({
      data: {
        author: user?.username!,
        title: postTitle,
        content: postContent,
        school: user?.school!,
        program: user?.program!,
      },
    });
  } catch (e) {
    console.log(e);
  }
}
