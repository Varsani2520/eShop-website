import { connectDatabase } from "@/app/database/db";
import { NextResponse } from "next/server";
import { provider } from "@/app/modal/providerModal";
import { services } from "@/app/modal/serviceModal";

// Connect to the database
connectDatabase();

export async function POST(request) {
  try {
    // Parse the request body as JSON

    // Extract the query from the parsed JSON body
    const { title } = await request.json();

    // Check if the query is a string
    if (typeof title !== "string") {
      return NextResponse.json({ error: "Query must be a string" });
    }

    // Search for providers in the database where title matches the query
    const user = await services.findOne({
      title: { $regex: title, $options: "i" },
    });

    // If no user is found, return a message indicating that
    if (!user) {
      return NextResponse.json({ msg: "query not found" });
    }

    // Return a success message
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    // If an error occurs, return an error response
    return NextResponse.json({
      error: error.message || "internal",
    });
  }
}
