'use client';
import illustration from '@/assets/auth-illustration.svg';
import githubLogo from '@/assets/github-logo.svg';
import googleLogo from '@/assets/google-logo.svg';
import xLogo from '@/assets/x-logo.svg';
import AppForm from '@/components/form/AppForm';
import AppInput from '@/components/form/AppInput';
import AppSubmit from '@/components/form/AppSubmit';
import { Button } from '@/components/ui/button';
import Divider from '@/components/ui/divider';
import Image from 'next/image';
import Link from 'next/link';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email address'),
  password: z.string({
    required_error: 'Password is required',
  }),
});

const defaultValues = {
  currentPassword: '',
  newPassword: '',
};

export default function SignupPage() {
  async function onSubmit(data: FieldValues) {
    console.log(data);

    await new Promise((resolve) => setTimeout(() => resolve(''), 5000));
  }

  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <div className="shadow-2xl bg-white h-[80vh] w-[80vw] grid grid-cols-2 overflow-hidden">
        <div className="w-full h-full">
          <Image
            src={illustration}
            alt="Finance Tracker"
            className="w-full h-full"
          />
        </div>
        <div className="px-32 flex justify-center items-center">
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-1">Create account</h1>
            <p className="text-gray-500 mb-6">
              Create an account to start finance tracking
            </p>

            <AppForm
              onSubmit={onSubmit}
              schema={FormSchema}
              defaultValues={defaultValues}
            >
              <AppInput
                name="name"
                label="Name"
                placeholder="Enter name here"
              />
              <AppInput
                name="email"
                label="Email"
                placeholder="Enter email here"
              />
              <AppInput
                name="password"
                type="password"
                label="Password"
                placeholder="Enter password here"
              />
              <AppSubmit className="w-full">Signup</AppSubmit>
            </AppForm>

            <Divider>Or Login with</Divider>

            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" size="lg">
                <Image
                  src={googleLogo}
                  alt="google logo"
                  height={24}
                  width={24}
                />
              </Button>
              <Button variant="outline" size="lg">
                <Image
                  src={githubLogo}
                  alt="github logo"
                  height={24}
                  width={24}
                />
              </Button>
              <Button variant="outline" size="lg">
                <Image src={xLogo} alt="x logo" height={24} width={24} />
              </Button>
            </div>

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
