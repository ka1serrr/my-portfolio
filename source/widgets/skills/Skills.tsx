"use client";

import { SectionHeading, skillsData, useSectionInView } from "@/shared";
import { Skill } from "@/source/entities/skills";
import React from "react";

export const Skills = () => {
  const { ref } = useSectionInView({ threshold: 0.7, activeSection: "#skills" });

  return (
    <section ref={ref} id='skills' className='mt-28 max-w-[53rem] scroll-mt-28 text-center sm:mt-40'>
      <SectionHeading className='mb-8'>Скиллы</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 '>
        {skillsData.map((skill, index) => (
          <Skill skill={skill} key={skill} index={index} />
        ))}
      </ul>
    </section>
  );
};
