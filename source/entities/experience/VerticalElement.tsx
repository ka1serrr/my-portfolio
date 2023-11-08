"use client";

import { experiencesData } from "@/shared";
import React, { FC } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type Props = {
  experienceItem: (typeof experiencesData)[0];
};

export const VerticalElement: FC<Props> = ({ experienceItem }) => {
  const { title, icon, location, description, date } = experienceItem;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#f3f4f6",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #9ca3af",
      }}
      date={date}
      dateClassName='mx-[10px]'
      iconStyle={{
        background: "white",
        fontSize: "1.5rem",
      }}
      icon={icon}
    >
      <h3 className='font-semibold capitalize'>{title}</h3>
      <p className='font-normal !mt-0'>{location}</p>
      <p className='!mt-1 !font-normal text-gray-700'>{description}</p>
    </VerticalTimelineElement>
  );
};
