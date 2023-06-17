import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  const res = await prisma.user.findFirst({
    where: { email: session?.user?.email },
  });

  const tosend = { email: res!.email };

  return NextResponse.json(tosend);
}
