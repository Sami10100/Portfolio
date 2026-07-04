import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const retiredPaths = new Set([
  "/footer/ft-home-05",
  "/footer/footer-02",
  "/serena-williams-can-absolutely-break-courts-grand-slam-record-2",
  "/serena-williams-can-absolutely-break-courts-grand-slam-record-3",
  "/the-rumoreding-iphone-could-not-come-in-pink-5",
  "/you-are-free-to-choose-what-you-want-2",
  "/category/lifestyle/feed",
]);

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (retiredPaths.has(normalizePath(pathname))) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "cache-control": "public, max-age=86400",
        "content-type": "text/plain; charset=utf-8",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = new URL(request.url);
    url.pathname = normalizePath(pathname);
    const location = url.toString();
    return new NextResponse(null, {
      status: 308,
      headers: {
        location,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
