import { SkillData } from "@/shared";
import React, { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  skill: SkillData;
  index: number;
};

const animationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skill: FC<Props> = ({ skill, index }) => {
  return (
    <motion.li
      variants={animationVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
      className='text-lg text-gray-800 border border-black/10 rounded-xl px-5 py-3'
      custom={index}
    >
      {skill}
    </motion.li>
  );
};
