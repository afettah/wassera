import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-tr from-white from-50% via-white to-primary/25 to-100%",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Container;
