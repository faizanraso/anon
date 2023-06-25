import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  let infoComplete = { complete: false };
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: { email: session?.user?.email },
  });

  if (
    user?.program !== null &&
    user?.school !== null &&
    user?.username !== null
  ) {
    infoComplete = { complete: true };
  }

  return NextResponse.json(infoComplete);
}
