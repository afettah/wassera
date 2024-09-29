import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CustomButtonProps {
  className?: string;
  children: ReactNode;
  type?: "primary" | "orange";
  size?: "sm" | "lg";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  children,
  type = "primary",
  size = "lg",
  variant,
}) => {
  const sizeClasses = {
    sm: "h-10 w-24 text-sm",
    lg: "h-14 w-40 text-lg",
  };

  const typeClasses = {
    primary: "bg-primary text-primary-foreground",
    orange: "bg-orange text-orange-foreground",
  };

  return (
    <Button
      size={size}
      variant={variant}
      className={cn(
      `${typeClasses[type]} font-bold py-2 px-4 transition-opacity duration-300 hover:opacity-80 ${sizeClasses[size]}`, 
      className
      )}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
