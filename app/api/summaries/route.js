import { summaries } from "@/app/modal/PlaceeOrderModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { token, data, status, date } = await request.json();
  try {
    const response = await summaries({ token, data, status, date });
    const result =await response.save();
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  }
}
