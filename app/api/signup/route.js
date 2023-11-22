import { connectDatabase } from "@/app/database/db";
import { signupUser } from "@/app/modal/signupUser";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectDatabase();

export async function POST(request) {
  const { username, password, name, address } = await request.json();
  await connectDatabase();

  const token = jwt.sign({ username }, process.env.JWT_SECRET);
  try {
    const hashpassword = await bcrypt.hash(password, 8);
    const UserSchema = new signupUser({
      password: hashpassword,
      username: username,
      name: name,
      address: address,
      token: token,
    });
    const createuser = await UserSchema.save();
    // Set the token in a cookie

    console.log(token);
    console.log("user created successfully");
    return NextResponse.json({ createuser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "failed user", success: "false" });
  }
}
