'use client'

import { LoadingButton } from '@/components/button'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import { loginSchema } from '@/schemas/auth'
import type { LoginFormType } from '@/types/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebookF } from 'react-icons/fa'
import { GrGoogle } from 'react-icons/gr'

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
                <PasswordInput placeholder="Senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="link" className="w-fit pl-0">
          Esqueceu a senha?
        </Button>

        <LoadingButton isLoading={isLoading}>Entrar</LoadingButton>
        <div className="flex gap-2 items-center justify-center">
          <Separator className="w-[45%]" />
          <p>ou</p>
          <Separator className="w-[45%]" />
        </div>
        <Button variant="outline">
          <GrGoogle className="mr-2 h-4 w-4" />
          Entrar com o Google
        </Button>
        <Button variant="outline">
          <FaFacebookF className="mr-2 h-4 w-4" />
          Entrar com o Facebook
        </Button>

        <div className="mt-4 flex gap-2 items-center justify-center">
          <p className="text-sm">Não tem uma conta?</p>
          <Button variant="link" className="pl-0" asChild>
            <Link href="/auth/register">Cadastre-se</Link>
          </Button>
        </div>
      </form>
    </Form>
  )
}
