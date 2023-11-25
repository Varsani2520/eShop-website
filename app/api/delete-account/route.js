import { connectDatabase } from "@/app/database/db";
import { loginUser } from "@/app/modal/loginUser";
import {  NextResponse } from "next/server";

export async function POST(request){
    connectDatabase()
    const {token}=await request.json()
    try {
        const result=await loginUser.deleteOne(token)
        return NextResponse.json(result)
    } catch (error) {
        console.log(error);
    }
}