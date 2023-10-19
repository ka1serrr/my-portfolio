"use client";
 
import { motion } from "framer-motion";

const variants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const Header = () => {
  return (
    <header className='z-[999] relative'>
      <motion.div
        className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:height-[3.5rem] sm:w-[36rem] sm:rounded-full'
        variants={variants}
        initial='initial'
        animate='animate'
      ></motion.div>
    </header>
  );
};
