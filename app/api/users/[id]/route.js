import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new NextResponse("Error fetching users", { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    const body = await request.json();
    const { employeeId } = body;
    const { id } = params;

    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        employeeId,
      },
    });

    if (!updateUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(updateUser), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new NextResponse("Error updating user", { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return new NextResponse(JSON.stringify({ message: "User deleted" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new NextResponse("Error deleting user", { status: 500 });
  }
}
