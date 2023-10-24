import { ButtonHTMLAttributes, forwardRef, ReactElement } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/shared";

const buttonVariants = cva(
  "rounded-full flex w-full  items-center gap-2 px-7 py-3 text-[1.35rem] focus:scale-105 transition-all duration-150 hover:scale-105 active:scale-[1.02]",
  {
    variants: {
      color: {
        dark: "bg-gray-900 text-white outline-none hover:bg-gray-950 ",
        light: "bg-white text-gray-7 hover:text-gray-950",
      },
      size: {
        small: "p-4 text-gray-700 hover:text-gray-950",
      },
    },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    rightContent?: ReactElement;
  };

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { color, size, children, className } = props;
  return (
    <button ref={ref} className={cn(buttonVariants({ color, size, className }))} {...props}>
      {children}
    </button>
  );
});

export { Button, buttonVariants };

Button.displayName = "Button";
