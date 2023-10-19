import Link from "next/link";

export default async function Page({ params }) {
  return (
    <div>
      <Link href="/customdomain/langnotfound">
        Current {params.domain}: navigate to a not found lang
      </Link>
    </div>
  );
}
