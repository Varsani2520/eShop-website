import { connectDatabase } from "@/app/database/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signupUser } from "@/app/modal/signupUser";

connectDatabase();

export async function POST(request) {
  const { username, password } = await request.json();
  try {
    const user = await signupUser.findOne({ username });
    if (!user) {
      // User not found
      return NextResponse.json({
        success: false,
        message: "User does not exist",
      }, { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      return NextResponse.json({
        data: user,
        success: true,
        message: "User login successful",
        token: user.token,
        name: user.name,
        username: user.username,
        address: user.address,
      }, { status: 200 });
    } else {
      return NextResponse.json({
        success: false,
        message: "Unauthorized! Wrong password",
      }, { status: 401 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    }, { status: 500 });
  }
}
