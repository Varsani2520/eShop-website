import { connectDatabase } from "@/app/database/db";
import { signupUser } from "@/app/modal/signupUser";
import { NextResponse } from "next/server";

connectDatabase();

export async function POST(request) {
  const { token } = await request.json();

  try {
    const user = await signupUser.findOne({ token });
    if (user) {
     
      await signupUser.deleteOne({ token });
      return NextResponse.json({ message: `User deleted successfully.` });
    } else {
      
      return NextResponse.json({ message: `User  not found.` });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal server error." });
  }
}
