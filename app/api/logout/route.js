import { NextResponse } from "next/server";

export async function POST(request) {
    
  return NextResponse.json({ msg: "logout success" }, { status: 201 });
}
