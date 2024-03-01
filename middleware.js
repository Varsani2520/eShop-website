import { NextResponse } from "next/server";

export function middleware(request) {
  const isAuthenticate = request.cookies.get("user")?.value === "true";

  console.log(isAuthenticate);
  const { pathname } = request.nextUrl;
  if (isAuthenticate) {
    console.log("inside");
    if (pathname.startsWith("/pages/profile")) {
      console.log("hlo");
    }
    if (
      pathname.startsWith("/pages/signup") ||
      pathname.startsWith("/pages/login")
    ) {
      return NextResponse.redirect(
        new URL("https://eshop-varsani2520.vercel.app/")
      );
    }
  }
  // user is not auth
  if (!isAuthenticate) {
    console.log("inside");
    if (pathname.startsWith("/pages/profile")) {
      return NextResponse.redirect(
        new URL("https://eshop-varsani2520.vercel.app/")
      );
    }
    if (pathname.startsWith("/pages/checkout")) {
      return NextResponse.redirect(
        new URL("https://eshop-varsani2520.vercel.app/")
      );
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/profile"],
};
