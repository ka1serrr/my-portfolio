"use client";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SectionHeading, experiencesData, useSectionInView } from "@/shared";
import { VerticalElement } from "@/entities";

export const Experience = () => {
  const { ref } = useSectionInView({ threshold: 0.7, activeSection: "#experience" });

  return (
    <section ref={ref} id='experience' className='mt-28 max-w-[53rem] scroll-mt-28 text-center sm:mt-40'>
      <SectionHeading className='mb-8'>Опыт работы</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((experienceItem) => (
          <VerticalElement experienceItem={experienceItem} key={experienceItem.title} />
        ))}
      </VerticalTimeline>
    </section>
  );
};
