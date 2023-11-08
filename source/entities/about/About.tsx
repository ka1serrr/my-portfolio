"use client";

import { motion } from "framer-motion";
import { SectionHeading, useSectionInView } from "@/shared";

const variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export const About = () => {
  const { ref } = useSectionInView({ threshold: 0.6, activeSection: "#about" });

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-2xl text-center leading-8 sm:mb-40 scroll-mt-28'
      id='about'
      variants={variants}
      initial='initial'
      animate='animate'
      transition={{ delay: 0.175 }}
    >
      <SectionHeading className='mb-8'>Обо мне</SectionHeading>
      <p className='mb-3'>
        На данный момент я <span className='font-bold'>студент 4 курса НИУ ВШЭ'25</span>. В дальнейшем планирую{" "}
        <span className='italic'>поступление в магистратуру "Магистер по наукам о данных"</span>. На данный момент я
        полностью уделяю всё своё свободное время своему любимому занятию -{" "}
        <span className='font-medium'> Front-End разработке</span>. Моя{" "}
        <span className='underline'>любимая часть в программировании</span> - это решение проблемных задач, возможность
        своей работой помочь другим людям и возможность создать что-то новое.
        <br />
        Мой основной стэк:{" "}
        <span className='font-bold'>React, ReduxToolKit, Next.js, TypeScript, Tailwindcss, ChakraUI. </span> На данный
        момент я ищу <span className='font-medium'>фулл тайм работу</span> в качестве Front-end разработчика
      </p>
      <p>
        <span className='italic'>Помимо программирования</span>, я увлекаюсь чтением (очень люблю начную фантастику,
        особенно Стругацких), видео-играми, фильмами, фотографированием
      </p>
    </motion.section>
  );
};
