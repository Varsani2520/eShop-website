import { bookmark } from "@/app/modal/bookmark";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { token, data } = await request.json();
  try {
    const response = await bookmark({ token: token, data: data });
    const result = await response.save();
    return NextResponse.json({
      msg: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
}
