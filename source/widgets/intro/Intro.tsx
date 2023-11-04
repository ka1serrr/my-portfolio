"use client";

import Image from "next/image";
import { AVATAR } from "@/shared";
import { motion } from "framer-motion";
import { InfoButtons } from "@/entities";

const variants = {
  imageInitial: { opacity: 0, scale: 0 },
  imageAnimate: { opacity: 1, scale: 1 },
  textInitial: { opacity: 0, y: 100 },
  textAnimate: { opacity: 1, y: 0 },
};

export const Intro = () => {
  return (
    <section id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            variants={variants}
            animate='imageAnimate'
            initial='imageInitial'
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              alt='My avatar'
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
              height='192'
              quality='95'
              priority={true}
              src={AVATAR}
              width='192'
            />
          </motion.div>

          <motion.span
            className='text-4xl absolute right-0 bottom-0'
            variants={variants}
            initial='imageInitial'
            animate='imageAnimate'
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className='mb-10 mt-4 px-4 text-2xl/[1.5] font-medium sm:text-4xl'
        variants={variants}
        animate='textAnimate'
        initial='textInitial'
      >
        <span className='font-bold'>Привет! Меня зовут Ярослав</span>. Мне 20 лет. Я являюсь
        <span className='font-bold'> front-end </span>
        разработчиком <br /> с <span className='font-bold'>2-х летним</span> опытом работы. И я очень люблю
        <span className='italic'>создавать сайты</span>, особенно на{" "}
        <span className='underline'>
          {" "}
          <br /> React (Next.js)
        </span>
      </motion.p>
      <InfoButtons />
    </section>
  );
};
