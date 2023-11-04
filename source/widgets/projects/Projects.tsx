"use client";

import { SectionHeading, useSectionInView } from "@/shared";
import { projectsData } from "@/shared";
import { Project } from "@/entities";

export const Projects = () => {
  const { ref } = useSectionInView({ threshold: 0.4, activeSection: "#projects" });

  return (
    <section id='projects' className='scroll-mt-28' ref={ref}>
      <SectionHeading className='mb-8'>Мои проекты</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
