import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { schoolFilters, programFilters } from "@/app/utils/constants";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const filterId = searchParams.get("filterId");

  const schoolFilter = schoolFilters.filter(
    (school) => school.filterId === filterId
  );
  const programFilter = programFilters.filter(
    (program) => program.filterId === filterId
  );

  if (schoolFilter.length) {
    try {
      const posts = await prisma.post.findMany({
        orderBy: { creation_time: "desc" },
        where: { school: schoolFilter[0].name },
      });
      return NextResponse.json(posts);
    } catch (e) {
      return e;
    }
  } else {
    try {
      const posts = await prisma.post.findMany({
        orderBy: { creation_time: "desc" },
        where: { program: programFilter[0].name },
      });
      return NextResponse.json(posts);
    } catch (e) {
      return e;
    }
  }
}
