import illustration from '@/assets/auth-illustration.svg';
import Image from 'next/image';

export default function AuthIllustration() {
  return (
    <div className="w-full h-full hidden md:block relative">
      <Image
        src={illustration}
        alt="Finance Tracker"
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
