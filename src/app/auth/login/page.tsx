import { LoginForm } from '@/components/auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-[url('/images/background.jpg')] bg-cover bg-center px-4">
      <Card className="w-full max-w-md p-6 rounded-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">Team XP</CardTitle>
          <CardDescription className="mt-2">
            Desperte o potencial máximo da sua equipe.
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-6">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
