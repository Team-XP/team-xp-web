import { LoginForm } from '@/components/login'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-xl">Team XP</CardTitle>
          <CardDescription>Desperte o potencial máximo da sua equipe.</CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
