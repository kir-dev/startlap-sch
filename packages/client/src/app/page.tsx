import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className={clsx("text-2xl")}>Hajrá Srácok!</h1>
      <Link className="text-blue-500" href="collections">
        Kollekciók
      </Link>
      <Link className="text-blue-500" href="links">
        Linkek
      </Link>
    </main>
  );
}
