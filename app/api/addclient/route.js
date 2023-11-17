import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const {
    name,
    clientId,
    email,
    phone,
    country,
    city,
    address,
    postalCode,
    state,
    company,
    website,
  } = body.data;
  console.log(body.data);

  //   Check if the fields are not empty
  if (
    !name ||
    !clientId ||
    !email ||
    !phone ||
    !country ||
    !city ||
    !address ||
    !postalCode ||
    !state ||
    !company ||
    !website
  ) {
    return new NextResponse("Please fill all the fields", {
      status: 400,
    });
  }

  //   Check if client already exists
  const exist = await prisma.client.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    return new NextResponse("Client already exists", {
      status: 400,
    });
  }

  //   Create the client
  const client = await prisma.client.create({
    data: {
      name,
      clientId,
      email,
      phone,
      country,
      city,
      address,
      postalCode,
      state,
      company,
      website,
    },
  });

  return NextResponse.json(client);
}
