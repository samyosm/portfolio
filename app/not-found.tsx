import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-40 mx-auto w-fit text-center space-y-5">
      <header className="space-y-3">
        <h1 className="text-6xl font-semibold">
          Error <span className="text-indigo-500">404</span>
        </h1>
        <p>This page does not seem to exist...</p>
      </header>
      <section className="flex gap-5 p-5 justify-center">
        <Link
          className="block px-5 py-2 bg-indigo-500 text-white rounded-xl self-baseline"
          href="/"
        >
          Home
        </Link>
        <Link
          className="block px-5 py-2 ring-inset ring-2 ring-indigo-500 text-indigo-500 rounded-xl hover:bg-indigo-500 hover:text-white"
          href="/blog"
        >
          Blog
        </Link>
      </section>
    </div>
  );
}
