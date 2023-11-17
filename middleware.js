import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware executed");
  const authToken = request.cookies.get("authToken")?.value;
  const loggedInUserNotAccessPath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";
  if (loggedInUserNotAccessPath) {
    if (authToken) {
      return NextResponse.rewrite(new URL("/profile", request.url));
    } else {
      // accessing secured route try
      if (!authToken) {
        return NextResponse.rewrite(new URL("/signup", request.url));
      }
    }
  }
  console.log(authToken);
}

export const config = {
  matcher: ["/api/:path*", "/", "/signup", "/checkout/:path*", "/about"],
};
