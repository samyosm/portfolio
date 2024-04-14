import { Post } from "@/.velite";
import { Highlight } from "@/components/highlight/Highlight";
import Link from "next/link";

export function PostDisaply({ p }: { p: Post }) {
  return (
    <Link href={p.permalink}>
      <article className="space-y-3">
        <hgroup>
          <h1 className="text-slate-900 text-xl font-semibold">
            <Highlight content={p.title} />
          </h1>
          <p className="whitespace-nowrap overflow-x-auto w-full">
            <time dateTime={p.prettyDate}>{p.prettyDate}</time>
            {p.tags.map((t) => <Tag key={t} text={t} />)}
          </p>
        </hgroup>
        <p className="line-clamp-3 text-slate-700">{p.excerpt}</p>
      </article>
    </Link>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="before:content-['_•_']">
      {text}
    </span>
  );
}
