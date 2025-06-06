import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const allowedPaths = ["/", "/ebook"];
  // const pathname = request.nextUrl.pathname;
  // const isAllowedPath = allowedPaths.find((path) => path === pathname);
  // if (!isAllowedPath) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|videos|images|robots.txt).*)",
  ],
};
