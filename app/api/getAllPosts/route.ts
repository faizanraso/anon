import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { creation_time: "desc" },
    });
    return NextResponse.json(posts);
  } catch (e) {
    console.log(e);
  }
}
