import { posts } from "@/.velite";
export default function Page() {
  return (
    <div className="flex h-full flex-col">
      {posts.map((t) => <p key={t.slug}>{t.title}</p>)}
    </div>
  );
}
