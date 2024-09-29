import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundImageContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url('/images/background.svg')] before:absolute before:inset-0 before:bg-[url('/images/background.svg')] before:bg-cover before:bg-center before:opacity-30 before:z-0"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundImageContainer;
