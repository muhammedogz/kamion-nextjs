import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Lock, LockOpen, MailIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/floating-input';
import { useLogin } from '@/hooks/useLogin';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be less than 100 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const loginMutation = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: LoginFormValues) {
    loginMutation.mutate(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  label={<FormLabel>Email Address</FormLabel>}
                  endAdornment={<MailIcon className="text-bg-primary size-6" />}
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  label={<FormLabel>Password</FormLabel>}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  endAdornment={
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <LockOpen className="text-bg-primary size-6" />
                      ) : (
                        <Lock className="text-bg-primary size-6" />
                      )}
                    </Button>
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="md:self-end"
          disabled={loginMutation.isPending}
          isLoading={loginMutation.isPending}
        >
          {loginMutation.isPending ? 'Logging in...' : 'Login'}
          <ArrowRight className="size-4" />
        </Button>
      </form>
    </Form>
  );
}
