import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  let pageNumber = Number(searchParams.get("page"));

  try {
    const count = await prisma.post.count();
    const posts = await prisma.post.findMany({
      take: 12,
      skip: 12 * (pageNumber - 1),
      orderBy: { creation_time: "desc" },
    });

    return NextResponse.json({ posts, count });
  } catch (e) {
    return e;
  }
}
