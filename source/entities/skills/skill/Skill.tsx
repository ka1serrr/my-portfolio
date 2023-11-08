import { SkillData } from "@/shared";
import React, { FC } from "react";

type Props = {
  skill: SkillData;
};
export const Skill: FC<Props> = ({ skill }) => {
  return <li className='text-lg text-gray-800'>{skill}</li>;
};
