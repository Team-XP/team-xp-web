'use client'

import { loginSchema } from '@/schemas/login'
import type { LoginFormType } from '@/types/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { GrGoogle } from 'react-icons/gr'
import { useToast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import { ReloadIcon } from '@radix-ui/react-icons'
import { LoadingButton } from '@/components/button'

export function LoginForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

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
          try {
            setIsLoading(true)
          } catch (e) {
            toast({
              variant: 'destructive',
              title: 'Ops, ocorreu um erro!',
              description: 'Por favor, tente novamente mais tarde.'
            })
          } finally {
            // setIsLoading(false)
          }
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
          Esqueceu a senha?
        </Button>

        <LoadingButton isLoading={isLoading}>Entrar</LoadingButton>
        {/* <div className="flex gap-2 items-center justify-center">
          <Separator className="w-[45%]" />
          <p>or</p>
          <Separator className="w-[45%]" />
        </div>
        <Button variant="outline">
          <GrGoogle className="mr-2 h-4 w-4" />
          Sign In with Google
        </Button> */}
      </form>
    </Form>
  )
}
