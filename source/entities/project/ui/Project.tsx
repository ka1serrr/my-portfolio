"use client";

import { Divider, projectsData } from "@/shared";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { FC, useRef } from "react";

type Props = (typeof projectsData)[0];

// TODO: Каким-либо образом нужно заскринить так, чтобы они в итоге получились больше!!

export const Project: FC<Props> = (props) => {
  const { title, description, tags, image } = props;

  const framerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: framerRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={framerRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='mb-3 sm:mb-8 last:mb-0 group'
    >
      <div className='bg-gray-100 hover:bg-gray-200 transition-colors duration-200 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 even:pl-8  relative rounded-2xl sm:h-max'>
        <div className='pt-2 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 h-full sm:max-w-[50%] flex flex-col group-even:ml-[19rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
          <ul className='flex flex-wrap gap-2 mt-4 sm:mt-5'>
            {tags.map((tag) => (
              <li
                className='bg-black/[0.7] px-3 py-2 font-bold text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={image}
          alt={title}
          quality={95}
          className='absolute -bottom-0 -right-40 w-[28.25rem] rounded-t-xl shadow-2xl 
        transition-all
        group-hover:-translate-x-5
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-110

        group-even:right-[initial] 
        group-even:-left-40
        group-even:group-hover:translate-x-3
        group-even:group-hover:rotate-2'
        />
      </div>
    </motion.div>
  );
};
