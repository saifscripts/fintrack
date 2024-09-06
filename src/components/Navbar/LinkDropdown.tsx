'use client';
import { cn } from '@/lib/utils';
import { IPathWithChildren } from '@/types';
import { usePathname } from 'next/navigation';
import { NavLink } from '../ui/nav-link';

export default function LinkDropdown({ item }: { item: IPathWithChildren }) {
  const currentPath = usePathname();

  return (
    <div
      className={cn(
        'group relative h-12 flex items-center justify-center hover:bg-slate-900 px-6',
        {
          'bg-slate-800': item.children.some(
            (child) => child.pathname === currentPath
          ),
        }
      )}
    >
      <span>{item.text}</span>
      <div className="hidden group-hover:flex flex-col bg-slate-950 absolute top-full left-0 p-2 w-60">
        {item.children.map((child) => (
          <NavLink
            key={child.text}
            href={child.pathname}
            className="hover:bg-slate-900 px-4 py-2 rounded"
            activeClassName="bg-slate-800"
          >
            {child.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
