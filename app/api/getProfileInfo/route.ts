import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  if (request.method !== "GET") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 500 }
    );
  }

  try {
    const session = await getServerSession(authOptions);
    const user = await prisma.user.findFirst({
      where: { email: session?.user?.email! },
    });
    if (user?.program === null || user?.school === null) {
      NextResponse.json({ text: "missing" }, { status: 200 });
    } else {
      NextResponse.json({ text: "found" }, { status: 200 });
    }
  } catch (err) {
    NextResponse.json({ message: "Something went wrong" }, { status: 400 });
  }
}
