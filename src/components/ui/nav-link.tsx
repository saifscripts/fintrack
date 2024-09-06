'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  className: string;
  activeClassName?: string;
}

export function NavLink({
  children,
  href,
  className,
  activeClassName,
}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(className, { [activeClassName ?? '']: href === pathname })}
    >
      {children}
    </Link>
  );
}
