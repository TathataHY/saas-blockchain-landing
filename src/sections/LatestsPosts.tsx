import { Card } from "@/components/Card";
import { CutCornerButton } from "@/components/CutCornerButton";
import { Tag } from "@/components/Tag";
import { getPostColorFromCategory } from "@/utils/post-utils";
import type { CollectionEntry } from "astro:content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export const LatestsPosts = ({
  posts,
}: {
  posts: CollectionEntry<"blog">[];
}) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

  return (
    <section className="py-60">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Your portal to everything blockchain.
          </h2>
          <p className="text-center text-xl md:text-2xl mt-8 text-zinc-400">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, updated weekly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-28">
          <div className="flex flex-col gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                title="Read More"
                color={getPostColorFromCategory(post.data.category)}
                className={twMerge((index === 1 || index === 3) && "md:hidden")}
              >
                <Tag color={getPostColorFromCategory(post.data.category)}>
                  {post.data.category}
                </Tag>
                <h3 className="font-heading font-black text-3xl mt-3">
                  {post.data.title}
                </h3>
                <p className="text-lg text-zinc-400 mt-6">
                  {post.data.description}
                </p>
              </Card>
            ))}
          </div>
          <motion.div
            ref={targetRef}
            className="hidden md:flex flex-col gap-8 mt-16"
            style={{ marginTop }}
          >
            {posts.map((post, index) => (
              <Card
                key={index}
                title="Read More"
                color={getPostColorFromCategory(post.data.category)}
                className={twMerge((index === 0 || index === 2) && "md:hidden")}
              >
                <Tag color={getPostColorFromCategory(post.data.category)}>
                  {post.data.category}
                </Tag>
                <h3 className="font-heading font-black text-3xl mt-3">
                  {post.data.title}
                </h3>
                <p className="text-lg text-zinc-400 mt-6">
                  {post.data.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center mt-48 md:mt-32">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};
