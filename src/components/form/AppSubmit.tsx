import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '../ui/button';

interface AppSubmitProps {
  children: ReactNode;
  className?: string;
}

export default function AppSubmit({ children, className }: AppSubmitProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button type="submit" disabled={isSubmitting} className={cn(className)}>
      {children}
    </Button>
  );
}
