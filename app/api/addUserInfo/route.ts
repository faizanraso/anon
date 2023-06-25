import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authOptions);
  const body = await req.json();
  const { username, school, program } = body;

  try {
    const userUpdate = await prisma.user.update({
      where: {
        email: session?.user?.email!,
      },
      data: {
        username: username,
        school: school,
        program: program,
      },
    });
    NextResponse.json(userUpdate);
  } catch (e) {
    console.log(e);
  }
}
