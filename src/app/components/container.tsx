import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={clsx("w-full max-w-screen-xl mx-auto p-4 md:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;