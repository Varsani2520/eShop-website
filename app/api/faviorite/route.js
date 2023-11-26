import { faviorite } from "@/app/modal/get-faviourite";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { token, data } = await request.json();
  try {
    const response = await faviorite({ token, data });
    const result = response.save();
    return NextResponse.json({
      msg: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
}

