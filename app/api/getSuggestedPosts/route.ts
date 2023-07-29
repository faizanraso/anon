import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const count = await prisma.post.count();
    let allPosts = await prisma.post.findMany();

    let posts = allPosts
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 5);

    return NextResponse.json({ posts, count });
  } catch (e) {
    return e;
  }
}
