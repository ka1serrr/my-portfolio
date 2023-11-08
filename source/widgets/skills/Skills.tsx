import { SectionHeading, skillsData } from "@/shared";
import { Skill } from "@/source/entities/skills";
import React from "react";

export const Skills = () => {
  return (
    <section className='mt-28 max-w-[53rem] scroll-mt-28 text-center sm:mt-40'>
      <SectionHeading>Скиллы</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 ">
        {skillsData.map((skill) => (
          <Skill skill={skill} key={skill} />
        ))}
      </ul>
    </section>
  );
};
