import AuthIllustration from '@/components/Auth/AuthIllustration';
import LoginForm from '@/components/Auth/LoginForm';
import SocialLogin from '@/components/Auth/SocialLogin';
import Divider from '@/components/ui/divider';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center p-6 sm:p-8">
      <div className="shadow-2xl bg-white w-full sm:h-[80vh] sm:w-[80vw] grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg">
        <AuthIllustration />
        <div className="p-8 flex justify-center items-center">
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-1">Create account</h1>
            <p className="text-gray-500 mb-6">
              Create an account to start finance tracking
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
              Already have an account?{' '}
              <Link href="/login" className="text-blue-400 underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
