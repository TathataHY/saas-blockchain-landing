import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Tag = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs inline-flex rounded-full",
        props.className,
        props.color === "violet" && "text-violet-500 bg-violet-500/15",
        props.color === "cyan" && "text-cyan-500 bg-cyan-500/15",
        props.color === "lime" && "text-lime-500 bg-lime-500/15",
        props.color === "fuchsia" && "text-fuchsia-500 bg-fuchsia-500/15"
      )}
    >
      {props.children}
    </div>
  );
};
