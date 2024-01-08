import { MDXRemote } from "next-mdx-remote/rsc";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Counter } from "./callout";

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading font-bold mb-6 mt-14 text-white leading-tight tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading font-semibold mb-6 mt-14 text-white leading-tight tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading font-medium mb-4 mt-14 text-white leading-tight tracking-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("mt-3 font-body text-zinc-100", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li
      className={cn("m-0 [&>p]:mt-3 mt-3 leading-normal", className)}
      {...props}
    />
  ),
  figure: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <figure className={cn("my-5", className)} {...props} />
  ),
  figcaption: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <figcaption className={cn("text-xs font-code", className)} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        " [&>code]:!bg-zinc-900 rounded border mt-2 border-zinc-800 overflow-x-auto !bg-zinc-900 text-xs sm:text-sm pl-2 [&>span]:pr-2 py-2",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded !bg-zinc-700 px-[0.3rem] py-[0.1rem] font-code [&>span]:pr-4 text-sm",
        className
      )}
      {...props}
    />
  ),
  Counter,
  Image,
};

export function Mdx(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
