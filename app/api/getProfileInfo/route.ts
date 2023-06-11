import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const session = await getServerSession(authOptions);
  try {
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email! },
    });

    if (user?.program === null || user?.school === null) {
      res.status(200).json({ text: "missing" });
    } else {
      res.status(200).json({ text: "found" });
    }
  } catch (error) {
    console.error(error);
  }
}
