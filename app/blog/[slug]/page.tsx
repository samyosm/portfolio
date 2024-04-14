import { posts } from "@/.velite";
import { Highlight } from "@/components/highlight/Highlight";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Highlighter from "react-highlight-words";

interface PageProps {
  params: {
    slug: string;
  };
}

function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return { title: post.title, description: post.excerpt };
}

export function generateStaticParams(): PageProps["params"][] {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page(props: PageProps) {
  const post = getPostBySlug(props.params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="w-full max-w-prose mx-auto mt-8 space-y-8 px-5">
      <hgroup className="space-y-6">
        <h1 className="text-4xl font-semibold">
          <Highlight content={post.title} />
        </h1>
        <p className="text-slate-700">
          {post.abstract}
        </p>
        <section className="flex w-full justify-between">
          <p>By Samy</p>
          <time dateTime={post.prettyDate}>{post.prettyDate}</time>
        </section>
      </hgroup>
      <hr className="border-t-2 border-slate-200" />
      <section className="space-y-4">
        <section
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="prose prose-slate"
        />
      </section>
    </article>
  );
}
