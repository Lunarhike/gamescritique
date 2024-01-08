import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { getBlogPosts } from "@/server/blog";
import { formatDate } from "@/lib/utils";
import rehypePrettyCode from "rehype-pretty-code";

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
            className="block text-xs text-muted-foreground font-code tracking-tight"
          >
            Published on {formatDate(post.metadata.publishedAt)}
          </time>
        )}
        <h1 className="font-heading mt-1 inline-block text-5xl font-medium leading-tighter tracking-tight sm:text-5xl">
          {post.metadata.title}
        </h1>
      </div>
      <div className="py-4 prose dark:prose-invert prose-neutral">
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
