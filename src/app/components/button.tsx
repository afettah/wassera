import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CustomButtonProps {
  className?: string;
  children: ReactNode;
  variant?: 'primary' | 'orange';
  size?: 'sm' | 'lg';
}

const CustomButton: React.FC<CustomButtonProps> = ({ className, children, variant = 'primary', size = 'lg' }) => {
  const sizeClasses = {
    sm: 'h-10 w-24 text-sm',
    lg: 'h-14 w-40 text-lg',
  };

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground',
    orange: 'bg-orange text-orange-foreground',
  };

  return (
    <Button size={size} className={cn(`${variantClasses[variant]} font-bold py-2 px-4 rounded ${sizeClasses[size]} `, className)}>
      {children}
    </Button>
  );
};

export default CustomButton;
