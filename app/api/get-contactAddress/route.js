import { contactAddress } from "@/app/modal/contactAddress";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { token } = await request.json();
  try {
    const result=await contactAddress.find({token})

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json("fail")
  }
}
