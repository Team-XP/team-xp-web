import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { Separator } from '@/components/ui/separator'
import { GrGoogle } from 'react-icons/gr'

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-xl">Login</CardTitle>
          <CardDescription>Gamify effort and increase productivity!</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input type="email" placeholder="Email" />
          <PasswordInput placeholder="Password" />
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
        </CardContent>
      </Card>
    </div>
  )
}
