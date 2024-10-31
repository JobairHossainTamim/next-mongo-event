import { getErrorMessage } from "@/helper/error-message";
import { NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { connectDB } from "@/config/dbConfig";
import UserModel from "@/model/user-model";

connectDB();
export async function GET(request: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("Unauthorize request");
    const userInMongo = await UserModel.findOne({ clerkUserId: userId });

    return NextResponse.json({ user: userInMongo }, { status: 200 });
  } catch (error) {
    const message = getErrorMessage(error);
    return NextResponse.json({ message: message }, { status: 500 });
  }
}
