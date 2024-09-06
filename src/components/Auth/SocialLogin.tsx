'use client';
import githubLogo from '@/assets/github-logo.svg';
import googleLogo from '@/assets/google-logo.svg';
import xLogo from '@/assets/x-logo.svg';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function SocialLogin() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <Button
        variant="outline"
        size="lg"
        className="gap-3"
        onClick={() =>
          signIn('google', {
            callbackUrl: `${origin}/transactions`,
          })
        }
      >
        <Image src={googleLogo} alt="google logo" height={24} width={24} />
        <span className="sm:hidden">Sign in with Google</span>
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="gap-3"
        onClick={() =>
          signIn('github', {
            callbackUrl: `${origin}/transactions`,
          })
        }
      >
        <Image src={githubLogo} alt="github logo" height={24} width={24} />
        <span className="sm:hidden">Sign in with Github</span>
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="gap-3"
        onClick={() =>
          signIn('twitter', {
            callbackUrl: `${origin}/transactions`,
          })
        }
      >
        <Image src={xLogo} alt="x logo" height={24} width={24} />
        <span className="sm:hidden">Sign in with X</span>
      </Button>
    </div>
  );
}
