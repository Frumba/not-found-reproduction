import { notFound } from "next/navigation";

export const dynamic = "force-static";

export default async function Page() {
  notFound();

  return <div>page with lang not found</div>;
}
