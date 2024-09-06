import { Button } from '@/components/ui/button';
import { IPath } from '@/types';
import Link from 'next/link';
import { NavLink } from '../ui/nav-link';
import LinkDropdown from './LinkDropdown';

const items: IPath[] = [
  {
    pathname: '/transactions',
    text: 'Transactions',
  },
  {
    text: 'Accounts',
    children: [
      {
        pathname: '/create-account',
        text: 'Add An Account',
      },
      {
        pathname: '/groups',
        text: 'Groups',
      },
      {
        pathname: '/accounts',
        text: 'Accounts',
      },
    ],
  },
];

export function Navbar() {
  return (
    <div className="bg-slate-700 text-slate-200 h-12 px-8 flex justify-between items-center">
      <div className="flex">
        {items.map((item) => {
          if (!item.children) {
            return (
              <NavLink
                key={item.text}
                href={item.pathname}
                className="h-12 flex items-center justify-center hover:bg-slate-900 px-6"
                activeClassName="bg-slate-800"
              >
                {item.text}
              </NavLink>
            );
          }

          return <LinkDropdown key={item.text} item={item} />;
        })}
      </div>
      <Link href="/login">
        <Button variant="outline" className="text-gray-600">
          Login
        </Button>
      </Link>
    </div>
  );
}
