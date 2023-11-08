"use client";

import { useInView } from "react-intersection-observer";
import { useAppDispatch, useAppSelector } from "@/source/shared";
import { useEffect } from "react";
import { activeSection, setActiveSection } from "@/entities";

type Props = {
  threshold: number;
  activeSection: activeSection;
};

export const useSectionInView = ({ threshold, activeSection }: Props) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const dispatch = useAppDispatch();

  // Это нужно, чтобы не случался баг, при котором срабатывал useInView. Мы отключаем его, если кнопка в header была нажата в течение 0.5 секунды.
  const timeOfTheLastClick = useAppSelector((state) => state.header.timeOfTheLastClick);

  useEffect(() => {
    if (inView && Date.now() - timeOfTheLastClick > 500) {
      dispatch(setActiveSection(activeSection));
    }
  }, [inView, dispatch, timeOfTheLastClick]);

  return { ref };
};
