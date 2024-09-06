import AuthIllustration from '@/components/Auth/AuthIllustration';
import LoginForm from '@/components/Auth/LoginForm';
import SocialLogin from '@/components/Auth/SocialLogin';
import Divider from '@/components/ui/divider';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center p-6 sm:p-8">
      <div className="shadow-2xl bg-white w-full sm:h-[80vh] sm:w-[80vw] grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg">
        <div className="p-8 flex justify-center items-center">
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-1">Welcome back!</h1>
            <p className="text-gray-500 mb-6">
              Login your account to access your data
            </p>

            <LoginForm />

            <Divider>
              <>
                <p className="hidden sm:block">Or Login with</p>
                <p className="block sm:hidden">OR</p>
              </>
            </Divider>

            <SocialLogin />

            <p className="text-center mt-6">
              Didn&apos;t have an account?{' '}
              <Link href="/signup" className="text-blue-400 underline">
                Signup here
              </Link>
            </p>
          </div>
        </div>
        <AuthIllustration />
      </div>
    </div>
  );
}
