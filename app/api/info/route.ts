import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  let infoComplete = { complete: false };
  const session = await getServerSession(authOptions);
  const res = await prisma.user.findFirst({
    where: { email: session?.user?.email },
  });

  if (res?.program !== null && res?.school !== null) {
    infoComplete = { complete: true };
  }

  return NextResponse.json(infoComplete);
}
