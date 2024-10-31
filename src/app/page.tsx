import { Button } from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import { connectDB } from "@/config/dbConfig";
import { auth, currentUser } from "@clerk/nextjs/server";
import {
  getMongooseIDofLoggedInUser,
  handleNewUserRegister,
} from "@/actions/user";
connectDB();
export default async function Home() {
  await handleNewUserRegister();

  const mongoId = await getMongooseIDofLoggedInUser();

  return <div>Hommepage</div>;
}
