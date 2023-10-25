import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../../libs";

type Props = HTMLAttributes<HTMLHeadingElement>;

export const SectionHeading = forwardRef<HTMLHeadingElement, Props>((props, ref) => {
  const { children, className } = props;
  return (
    <h2 {...props} className={cn("font-bold text-4xl text-center", className)} ref={ref}>
      {children}
    </h2>
  );
});

SectionHeading.displayName = "SectionHeading";
