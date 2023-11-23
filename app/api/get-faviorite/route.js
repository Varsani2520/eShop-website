import { connectDatabase } from "@/app/database/db";

import { NextResponse } from "next/server";

connectDatabase();
export async function POST(request) {
  
    return NextResponse.json({ msg: "success" });
  
  }

