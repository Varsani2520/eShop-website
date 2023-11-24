import { connectDatabase } from "@/app/database/db";
import { bookmark } from "@/app/modal/bookmark";


import { NextResponse } from "next/server";

connectDatabase();
export async function POST(request) {
  const { token } = await request.json();
  try {
    const result = await bookmark.find({ token });
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }
}
