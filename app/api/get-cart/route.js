import { connectDatabase } from "@/app/database/db";
import { cart } from "@/app/modal/get-cart";
import { NextResponse } from "next/server";

connectDatabase();
export async function POST(request) {
  const { token } = await request.json();
  try {
    const result = await cart.find({ token });
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }
}

