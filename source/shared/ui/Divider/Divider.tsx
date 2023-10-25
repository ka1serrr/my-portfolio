"use client";

import { FC } from "react";
import { cn } from "../../libs";
import { motion } from "framer-motion";

type Props = {
  className?: string;
};

const variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export const Divider: FC<Props> = ({ className }) => {
  return (
    <motion.div
      className={cn("bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block", className)}
      variants={variants}
      initial='initial'
      animate='animate'
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};
