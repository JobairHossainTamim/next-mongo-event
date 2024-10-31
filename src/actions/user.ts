import { connectDB } from "@/config/dbConfig";
import UserModel from "@/model/user-model";
import { currentUser } from "@clerk/nextjs/server";
import mongoose from "mongoose";

connectDB();
export const handleNewUserRegister = async () => {
  try {
    const loggedInUser = await currentUser();

    // cheak user is already exist
    const userExist = await UserModel.findOne({
      clerkUserId: loggedInUser?.id,
    });

    if (userExist) return userExist;

    const userName =
      loggedInUser?.username ||
      `${loggedInUser?.firstName || ""} ${loggedInUser?.lastName || ""}`.trim();
    // create new user
    const newUser = new UserModel({
      userName: userName,
      email: loggedInUser?.emailAddresses[0].emailAddress,
      clerkUserId: loggedInUser?.id,
    });

    await newUser.save();
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const getMongooseIDofLoggedInUser = async () => {
  try {
    const loggedInUser = await currentUser();

    const userInMongo = await UserModel.findOne({
      clerkUserId: loggedInUser?.id,
    });
    if (userInMongo) return userInMongo._id;
  } catch (error: any) {
    console.log(error);
  }
};
