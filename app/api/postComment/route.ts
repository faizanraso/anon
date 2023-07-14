import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = req.json();
    const { comment } = body;

    const user = await prisma.user.findFirst({
      where: { email: session?.user?.email },
    });

    await prisma.comment.create({
      data: {
        username: user?.username!,
        school: user?.school!,
        comment: comment,
      },
    });
  } catch (e) {
    console.log(e);
  }
}
