import { connectDatabase } from "@/app/database/db";
import { provider } from "@/app/modal/providerModal";
import { ProviderService } from "@/app/service/ProviderService";
import { NextResponse } from "next/server";

//get provider
connectDatabase();
export async function GET(request) {
  console.log("provide success");
  try {
    //   const provider=await ProviderService.find()
    //   return NextResponse.json(provider)
    const providerData = await provider.find({});
    console.log("my providers", providerData);
    return NextResponse.json(providerData);
  } catch (error) {
    console.log(error, "provider error");
  }
}
