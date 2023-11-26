import { connectDatabase } from "@/app/database/db";
import { contactAddress } from "@/app/modal/contactAddress";
import { NextResponse } from "next/server";
connectDatabase();
export async function POST(request) {
  const { name, state, city, pin, contactNo, house, area, token } =
    await request.json();
  
  try {
    const UserSchema = new contactAddress({
      name: name,
      state: state,
      city: city,
      pin: pin,
      house: house,
      contactNo: contactNo,
      area: area,
      token: token,
    });
    const createuser = await UserSchema.save();
    console.log("contact address successfully");
    return NextResponse.json(createuser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "falied user", success: "false" });
  }
}

// get

// get route is test

