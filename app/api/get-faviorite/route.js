import { connectDatabase } from "@/app/database/db";
import { faviorite } from "@/app/modal/get-faviourite";

import { NextResponse } from "next/server";

connectDatabase();
export async function POST(request) {
  const { token } = await request.json();

  try {
    const getFav = new faviorite({
      token: token,
    });
    const faviorites = await getFav.save();
    console.log(faviorite);
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    return NextResponse.json({ msg: "fail" });
  }
}
