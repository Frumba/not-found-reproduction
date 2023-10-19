import { NextResponse } from "next/server";

const getPathRewritten = (request: Request) => {
  const url = new URL(request.url);

  const host =
    request.headers.get("host") ?? request.headers.get("x-forwarded-host");

  if (!host) {
    return null;
  }

  const cleanedPath = url.pathname.replace(/\/$/, "");

  return `/${host}${cleanedPath !== "/" ? cleanedPath : ""}`;
};

export function middleware(request: Request) {
  const requestHeaders = new Headers(request.headers);

  const pathRewritten = getPathRewritten(request);

  requestHeaders.set(
    "x-url",
    pathRewritten ? new URL(pathRewritten, request.url).href : request.url,
  );

  console.log(
    pathRewritten ? new URL(pathRewritten, request.url).href : request.url,
  );

  return NextResponse.next({
    headers: requestHeaders,
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */
    {
      source:
        "/((?!api|_next/static|monitoring|images|_next/image|favicon.ico).*)",
    },
  ],
};
