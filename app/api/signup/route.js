import { connectDatabase } from "@/app/database/db";
import { signupUser } from "@/app/modal/signupUser";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectDatabase();

export async function POST(request) {
  const { username, password, name, address } = await request.json();

  try {
    const existingUser = await signupUser.findOne({ username });
    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "Username already exists",
      }, { status: 400 });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const hashpassword = await bcrypt.hash(password, 8);
    const UserSchema = new signupUser({
      password: hashpassword,
      username,
      name,
      address,
      token,
    });
    const createuser = await UserSchema.save();

    console.log("User created successfully");
    return NextResponse.json({
      success: true,
      message: "User created successfully",
      user: createuser,
    }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Failed to create user",
    }, { status: 500 });
  }
}
