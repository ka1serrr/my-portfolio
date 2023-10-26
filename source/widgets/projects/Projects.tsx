import { SectionHeading } from "@/shared";
import { projectsData } from "@/shared";
import { Project } from "@/entities";

export const Projects = () => {
  return (
    <section>
      <SectionHeading className='mb-8'>Мои проекты</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};