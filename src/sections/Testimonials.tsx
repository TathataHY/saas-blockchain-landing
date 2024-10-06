import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    image: "/assets/images/avatar-erica-wyatt.jpg",
    name: "Erica Wyatt",
    role: "Product Manager - BlockLink",
    description:
      "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
  },
  {
    image: "/assets/images/avatar-noel-baldwin.jpg",
    name: "Noel Baldwin",
    role: "Lead Developer - BitBridge",
    description:
      "Our productivity has skyrocketed since we started using BlockForge. It's a game-changer for our team.",
  },
  {
    image: "/assets/images/avatar-harry-bender.jpg",
    name: "Harry Bender",
    role: "CTO - CryptoSolutions",
    description:
      "The integration process was seamless, and the performance improvements are beyond our expectations.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={index}
              className={twMerge(index === 2 && "md:hidden lg:block")}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            >
              <p className="text-heading text-3xl lg:text-4xl font-black">
                &ldquo;{testimonial.description}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg not-italic font-black">
                      {testimonial.name}
                    </div>
                    <div className="text-zinc-400 not-italic">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
