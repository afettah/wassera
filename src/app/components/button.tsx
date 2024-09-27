import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface CustomButtonProps {
  className?: string;
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ className, children }) => {
  return (
    <Button
      size={"lg"}
      className={`bg-primary h-14 w-40 text-white font-bold py-2 px-4 rounded text-lg ${className}`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;