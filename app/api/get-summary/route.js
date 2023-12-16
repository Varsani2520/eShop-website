import { connectDatabase } from "@/app/database/db";
import { summaries } from "@/app/modal/PlaceeOrderModel";
import { NextResponse } from "next/server";

connectDatabase();
export async function POST(request) {
  const { token } = await request.json();
  try {
    const result = await summaries.find({ token });
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }
}

