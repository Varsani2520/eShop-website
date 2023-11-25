import { connectDatabase } from "@/app/database/db";
import { faviorite } from "@/app/modal/get-faviourite";
import { NextResponse } from "next/server";
connectDatabase()
export async function POST(request) {
  const { token } = await request.json();
  try {
    const result = await faviorite.deleteOne({ token });
    return NextResponse.json(result);
  } catch (error) {
    console.log(error, "not delete ");
  }
}
