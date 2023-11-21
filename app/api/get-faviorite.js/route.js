import { connectDatabase } from "@/app/database/db";
import { faviorite } from "@/app/modal/get-faviourite";

import { NextResponse } from "next/server";
connectDatabase();
export async function POST(requet) {
  const { id } = await request.json({id});
  const fav = new faviorite({
    id: id,
  });
  try {
    await fav.save();

    return NextResponse.json({ msg: "success" });
  } catch (error) {
    return NextResponse.json({ msg: "fail" });
  }
}
