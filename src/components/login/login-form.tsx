'use client'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { loginSchema } from '@/schemas/login'
import type { LoginFormType } from '@/types/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { GrGoogle } from 'react-icons/gr'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { PasswordInput } from '../ui/password-input'
import { Separator } from '../ui/separator'
import { useToast } from '@/hooks/use-toast'

export function LoginForm() {
  const { toast } = useToast()

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(data => {
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.'
          })
        })}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
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
                <PasswordInput placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="link" className="w-fit pl-0">
          Forgot Password
        </Button>

        <Button>Sign In</Button>
        <div className="flex gap-2 items-center justify-center">
          <Separator className="w-[45%]" />
          <p>or</p>
          <Separator className="w-[45%]" />
        </div>
        <Button variant="outline">
          <GrGoogle className="mr-2 h-4 w-4" />
          Sign In with Google
        </Button>
      </form>
    </Form>
  )
}
