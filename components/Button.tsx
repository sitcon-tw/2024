import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
export default function Button({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      className={twMerge(
        `shadow-glass rounded-full backdrop-blur
        bg-pink-400 hover:bg-pink-300 active:bg-pink-500
        transition-colors
        w-1/3 py-4 px-6 text-lg drop-shadow text-white
        justify-center cursor-pointer
        inline-flex items-center text-center group`,
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
