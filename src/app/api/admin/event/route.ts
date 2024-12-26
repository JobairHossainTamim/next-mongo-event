import { getMongooseIDofLoggedInUser } from "@/actions/user";
import EventModel from "@/app/modules/event/event.model";
import { connectDB } from "@/config/dbConfig";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const UserId = auth();

    if (!UserId)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const mongoUserId = await getMongooseIDofLoggedInUser();
    const reqBody = await request.json();
    reqBody.user = mongoUserId;

    await EventModel.create(reqBody);
    return NextResponse.json(
      { message: "Event Create Successful" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
