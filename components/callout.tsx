"use client";

import { cn } from "@/lib/utils";
import { Suspense } from "react";

interface CalloutProps {
  emoji?: string;
  children?: React.ReactNode;
  className: string;
  type?: "default" | "warning" | "danger";
}

export function Counter({
  children,
  emoji,
  type = "default",
  className,
  ...props
}: CalloutProps) {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div
        className={cn(
          "flex items-center justify-center my-8 dark:bg-[#113B3C] hover:bg-[#191919] transition-all duration-200 hover:rounded-none rounded-2xl border-[#40FEFC] border h-[80px]",
          {
            "": type === "default",
            "": type === "danger",
            "": type === "warning",
          },
          className
        )}
        {...props}
      >
        <p className="[&>p]:m-0 text-xs sm:text-2xl font-semibold [&>p]:font-code [&>p]:text-[#40FEFC] uppercase ">
          {children}
        </p>
      </div>
    </Suspense>
  );
}
