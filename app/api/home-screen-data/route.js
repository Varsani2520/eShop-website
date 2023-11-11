import { connectDatabase } from "@/app/database/db";
import { provider } from "@/app/modal/providerModal";
import { ProviderService } from "@/app/service/ProviderService";
import { NextResponse } from "next/server";

//get provider
export async function GET(request) {
  console.log("provide success");
  try {
    connectDatabase();
    //   const provider=await ProviderService.find()
    //   return NextResponse.json(provider)
    const providerData = await provider.find();
    return NextResponse.json(providerData);
  } catch (error) {
    console.log(error, "provider error");
  }
}
