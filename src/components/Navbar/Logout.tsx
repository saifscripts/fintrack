'use client';

import { signOut } from 'next-auth/react';
import { Button } from '../ui/button';

export default function Logout() {
  return (
    <Button
      variant="outline"
      className="text-gray-600"
      onClick={() => signOut()}
    >
      Logout
    </Button>
  );
}
