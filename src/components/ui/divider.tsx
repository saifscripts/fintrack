import { ReactNode } from 'react';
import { Separator } from './separator';

export default function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 my-4">
      <Separator />
      <span className="text-gray-500">{children}</span>
      <Separator />
    </div>
  );
}
