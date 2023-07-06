import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextRequest } from "next/server";

export async function POST() {

    const session = await getServerSession(authOptions);

  try {
    const
    await prisma.post.create({

    })
  } catch (e) {
    throw new Error(e);
  }
}


model Post {
    author        String
    post_id       String   @id @default(cuid())
    user          User?    @relation(fields: [userId], references: [id], onDelete: Cascade)
    userId        String?
    title         String
    content       String   @db.Text
    creation_time DateTime @default(now())
    school        String
    program       String
  
    @@index([userId])
  }
  