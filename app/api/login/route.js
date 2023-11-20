import { connectDatabase } from "@/app/database/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signupUser } from "@/app/modal/signupUser";
connectDatabase();
// post method
export async function POST(request) {
  const { username, password } = await request.json();
  connectDatabase();

  try {
    const createuser = await signupUser.findOne({ username });
    if (!createuser) {
      return NextResponse.json({ msg: "user not found" });
    }
    const checkpasswordCon = bcrypt.compare(createuser.password, password);
    if (checkpasswordCon) {
      return NextResponse.json({
        data: createuser,
        msg: "user logedIn successfully",
      });
    }
    if(!checkpasswordCon){
      return NextResponse.json({msg:'enter valid password'})
    } else {
      return NextResponse.json({ msg: "enter vaild information" });
    }
  } catch (error) {
    return NextResponse.json({ message: "falied to login", success: "false" });
  }
}
