import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
  "/properties/add",
  "/profile",
  "/properties/saved",
  "/messages",
];
export function middleware(request: NextRequest) {
  const token =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  //redirect to home if not authenticated and trying to access protected route
  return !token && protectedRoutes.includes(request.nextUrl.pathname)
    ? NextResponse.redirect(new URL("/", request.url))
    : NextResponse.next();
}

//prevent access to certain routes if not authenticated
export const config = {
  matcher: protectedRoutes,
};
