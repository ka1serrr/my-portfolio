"use client";

import { Button, buttonVariants, cn } from "@/shared";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { BiLogoTelegram } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export const InfoButtons = () => {
  return (
    <motion.div
      className='flex flex-col sm:flex-row justify-center gap-4'
      variants={variants}
      initial='initial'
      animate='animate'
      transition={{
        delay: 0.1,
      }}
    >
      <Link href='#contact' className='rounded-full'>
        <Button className={cn(buttonVariants({ color: "dark" }), "group")}>
          Мои контакты <BsArrowRight className='group-hover:translate-x-1 transition' />
        </Button>
      </Link>
      <a className='rounded-full' href='/CV.pdf' download>
        <Button className={cn(buttonVariants({ color: "light" }), "group")}>
          Скачать моё CV <HiDownload className='group-hover:translate-y-0.5 transition' />{" "}
        </Button>
      </a>
      <a href='https://t.me/yrslvyas' target="_blank" className='rounded-full'>
        <Button color='light' size='small'>
          <BiLogoTelegram />
        </Button>
      </a>
      <a href='' target="_blank" className='rounded-full'>
        <Button color='light' size='small'>
          <FaGithubSquare />
        </Button>
      </a>
    </motion.div>
  );
};
