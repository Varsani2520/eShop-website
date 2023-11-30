import { connectDatabase } from "@/app/database/db";
import { signupUser } from "@/app/modal/signupUser";
import { NextResponse } from "next/server";

connectDatabase();

export async function POST(request) {
  const { username } = await request.json();

  try {
    const user = await signupUser.findOne({ username });
    if (user) {
     
      await signupUser.deleteOne({ username });
      return NextResponse.json({ message: `User ${username} deleted successfully.` });
    } else {
      
      return NextResponse.json({ message: `User ${username} not found.` });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal server error." });
  }
}
