import { connectDatabase } from "@/app/database/db";
import { signupUser } from "@/app/modal/signupUser";
import { NextResponse } from "next/server";
connectDatabase()
export async function POST(request){
    const {token}=await request.json()
    try {
        const result=await signupUser.deleteOne({token})
        return NextResponse.json(result)
    } catch (error) {
        console.log("error",error);
    }
}