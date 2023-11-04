"use client";

import { motion } from "framer-motion";
import { cn, links } from "@/shared";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/source/shared/hooks";
import { setActiveSection, setTimeOfTheLastClick } from "../models";

const variants = {
  initialHeader: { y: -100, x: "-50%", opacity: 0 },
  animateHeader: { y: 0, x: "-50%", opacity: 1, transition: { delay: 0.1 } },
  initialLi: { y: -100, opacity: 0 },
  animateLi: { y: 0, opacity: 1, transition: { delay: 0.2 } },
};

export const Header = () => {
  const activeSection = useAppSelector((state) => state.header.activeSection);
  const dispatch = useAppDispatch();

  return (
    <header className='z-[999] relative'>
      <motion.div
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:height-[3.25rem] sm:w-[36rem] sm:rounded-full'
        variants={variants}
        initial='initialHeader'
        animate='animateHeader'
      ></motion.div>

      <nav className='flex fixed top-[-0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-2.5'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links?.map((link) => (
            <motion.li
              className='h-3/4 flex items-center justify-center relative'
              key={link.hash}
              variants={variants}
              initial='initialLi'
              animate='animateLi'
            >
              <Link
                className={cn("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950", {
                  "text-gray-900": activeSection === link.hash,
                })}
                href={link.hash}
                onClick={() => {
                  dispatch(setActiveSection(link.hash));
                  dispatch(setTimeOfTheLastClick(Date.now()));
                }}
              >
                {link.name}

                {link.hash === activeSection ? (
                  <motion.span
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className='rounded-full absolute bg-gray-100 inset-0 -z-10'
                  ></motion.span>
                ) : null}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
