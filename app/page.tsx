import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <Link href="/customdomain">navigate to custom domain</Link>
    </div>
  );
}
