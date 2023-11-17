import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    // console.log("Users:", users);
    return new NextResponse(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new NextResponse("Error fetching users", { status: 500 });
  }
}

export async function DELETE(request) {
  const { id } = await request.json();
  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error deleting user", { status: 500 });
  }
}
