import Link from "next/link";

export function HeroPresentation() {
  return (
    <article className="flex flex-col max-w-md gap-5 xl:gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-slate-900 text-4xl xl:text-6xl font-semibold">
          Hi, I&apos;m Samy
        </h1>
        <h2 className="text-slate-600 text-xl xl:text-2xl font-medium">
          A Web Developer
        </h2>
      </header>

      <p className="text-slate-600 text-lg xl:text-xl">
        High level of experience in web design and development knowledge,
        producing quality work.
      </p>

      <Link
        href="/blog"
        className="bg-indigo-500 text-white w-fit rounded-2xl px-7 py-3 text-lg xl:text-xl"
      >
        Read Blog
      </Link>
    </article>
  );
}
