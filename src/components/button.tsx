"use client";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

interface ButtonProps {
  name: string;
  classNameprops?: string;
}

const Button = ({ name, classNameprops }: ButtonProps) => {
  return (
    <div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className={`dark:bg-black bg-white text-black flex items-center space-x-2 ${classNameprops}`}
      >
        <span>{name}</span>
      </HoverBorderGradient>
    </div>
  );
};

export default Button;
