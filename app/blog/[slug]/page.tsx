import { posts } from "@/.velite";
import { Metadata } from "next";
import { notFound } from "next/navigation";
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

  return (
    <article>
      {post?.title}
    </article>
  );
}
