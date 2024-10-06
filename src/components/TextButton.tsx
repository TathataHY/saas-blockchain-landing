import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const TextButton = (
  props: ComponentPropsWithoutRef<"button"> & { color?: string }
) => {
  const { color = "fuchsia" } = props;

  return (
    <button
      className={twMerge(
        "text-sm font-heading uppercase font-extrabold tracking-wider",
        props.color === "violet" && "text-violet-500",
        props.color === "cyan" && "text-cyan-500",
        props.color === "lime" && "text-lime-500",
        color === "fuchsia" && "text-fuchsia-500",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};
