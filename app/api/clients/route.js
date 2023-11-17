import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const clients = await prisma.client.findMany();
    // console.log("Users:", users);
    return new NextResponse(JSON.stringify(clients), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching clients:", error);
    return new NextResponse("Error fetching clients", { status: 500 });
  }
}
