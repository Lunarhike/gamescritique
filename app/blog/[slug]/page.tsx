import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { getBlogPosts } from "@/server/blog";
import { formatDate } from "@/lib/utils";
import rehypePrettyCode from "rehype-pretty-code";
import { Placeholder } from "@/server/placeholder";

export default async function Blog({ params }) {
  let posts = await getBlogPosts(); // Wait for the getBlogPosts function to resolve
  let post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container py-6 lg:py-8 max-w-[650px]">
      <div className="max-w-3xl">
        {post.metadata.publishedAt && (
          <time
            dateTime={post.metadata.publishedAt}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(post.metadata.publishedAt)}
          </time>
        )}
        <h1 className="mt-2 font-heading inline-block text-5xl font-medium leading-tight tracking-tight lg:text-5xl">
          {post.metadata.title}
        </h1>
        <div className="mt-4 flex space-x-4"></div>
        <Suspense fallback={<div>Test...</div>}>
          <Placeholder />
        </Suspense>
      </div>
      <div className="py-8">
        <Mdx
          source={post.content}
          options={{
            mdxOptions: {
              useDynamicImport: true,
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: "github-dark-dimmed",
                  },
                ],
              ],
            },
          }}
        />
        <hr />
      </div>
    </main>
  );
}
