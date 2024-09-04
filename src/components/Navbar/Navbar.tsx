'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  {
    path: '/transactions',
    text: 'Transactions',
  },
  {
    text: 'Accounts',
    children: [
      {
        path: '/create-account',
        text: 'Add An Account',
      },
      {
        path: '/groups',
        text: 'Groups',
      },
      {
        path: '/accounts',
        text: 'Accounts',
      },
    ],
  },
];

export function Navbar() {
  const activePath = usePathname();

  return (
    <div className="bg-slate-700 text-slate-200 h-12 px-8 flex items-center">
      <div className="flex">
        {items.map((item) => {
          if (!item.children) {
            return (
              <Link
                key={item.text}
                href={item.path}
                className={cn(
                  'h-12 flex items-center justify-center hover:bg-slate-900 px-6',
                  {
                    'bg-slate-800': item.path === activePath,
                  }
                )}
              >
                {item.text}
              </Link>
            );
          }

          return (
            <div
              key={item.text}
              className={cn(
                'group relative h-12 flex items-center justify-center hover:bg-slate-900 px-6',
                {
                  'bg-slate-800': item.children.some(
                    (child) => child.path === activePath
                  ),
                }
              )}
            >
              <span>{item.text}</span>
              <div className="hidden group-hover:flex flex-col bg-slate-950 absolute top-full left-0 p-2 w-max">
                {item.children.map((child) => (
                  <Link
                    key={child.text}
                    href={child.path}
                    className={cn('hover:bg-slate-900 px-4 py-2 rounded', {
                      'bg-slate-800': child.path === activePath,
                    })}
                  >
                    {child.text}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
