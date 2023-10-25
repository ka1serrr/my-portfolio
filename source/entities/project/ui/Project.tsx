import { projectsData } from "@/shared";
import Image from "next/image";
import { FC } from "react";

type Props = (typeof projectsData)[0];

export const Project: FC<Props> = (props) => {
  const { title, description, tags, image } = props;
  return (
    <div className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative rounded-2xl">
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10">
       <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag) => (
            <li className="bg-black/[0.7] px-3 py-2 font-bold text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={tag}>
            {tag}
            </li>
          ))}
        </ul>
      </div>  
      <Image src={image} alt={title} quality={95} className="absolute top-8 -right-40 w-[28.25rem]"/>
    </div>
  );
};
