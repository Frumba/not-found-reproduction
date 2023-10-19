import { headers } from "next/headers";

export default async function NotFound() {
  const headersList = headers();
  const xUrl = headersList.get("x-url");
  const url = xUrl ? new URL(headersList.get("x-url")!) : null;

  return <div>Not found {url?.pathname ?? "-"}</div>;
}
