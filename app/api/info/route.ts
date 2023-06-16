import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(authOptions);
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email! },
    });

    if (user?.program === null || user?.school === null) {
      res.json({ text: "missing" });
    } else {
      res.json({ text: "found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
