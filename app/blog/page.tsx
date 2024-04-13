import { posts } from "@/.velite";
import { PostDisaply } from "./PostDisplay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <div className="px-5 space-y-16 md:px-0 w-full max-w-screen-sm mx-auto my-6">
      <header className="space-y-2 mx-auto w-fit text-center">
        <p className="text-4xl font-semibold text-slate-900">
          Articles for <span className="text-indigo-500">devs</span>
        </p>
        <p className="text-slate-600">
          Explanation of programming concepts, tutorials, opinions and more.
        </p>
      </header>
      <section>
        <ul className="space-y-10">
          {posts.sort((a, b) =>
            (new Date(b.date)).getTime() -
            (new Date(a.date).getTime())
          ).map((
            p,
          ) => (
            <li
              key={p.slug}
              className=""
            >
              <PostDisaply p={p} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
