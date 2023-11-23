import { connectDatabase } from "@/app/database/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signupUser } from "@/app/modal/signupUser";

connectDatabase();

// post method
export async function POST(request) {
  const { username, password } = await request.json();

  try {
    const user = await signupUser.findOne({ username });

    if (!user) {
      return NextResponse.json({ msg: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return NextResponse.json({
        data: user,
        msg: "User logged in successfully",
      });
    } else {
      return NextResponse.json({ msg: "Enter valid password" });
    }
  } catch (error) {
    // Handle the error appropriately, e.g., log it or send an error response
    console.error(error);

    // If you have access to your store or dispatch function, use it here
    // dispatch(loginUserFailure("Failed to login"));

    return NextResponse.json({
      message: "Failed to login",
      success: false,
    });
  }
}
