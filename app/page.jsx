import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to PGC's BLog</h1>
      <ul>
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>
          <Link href="/about">About PGC</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
}
