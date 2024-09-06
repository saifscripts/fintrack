'use client';

import AppForm from '@/components/form/AppForm';
import AppInput from '@/components/form/AppInput';
import AppSubmit from '@/components/form/AppSubmit';
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
  email: '',
  password: '',
};

export default function LoginForm() {
  async function onSubmit(data: FieldValues) {
    console.log(data);

    await new Promise((resolve) => setTimeout(() => resolve(''), 5000));
  }

  return (
    <AppForm
      onSubmit={onSubmit}
      schema={FormSchema}
      defaultValues={defaultValues}
    >
      <AppInput name="email" label="Email" placeholder="Enter email here" />
      <AppInput
        name="password"
        type="password"
        label="Password"
        placeholder="Enter password here"
      />
      <AppSubmit className="w-full">Login</AppSubmit>
    </AppForm>
  );
}
