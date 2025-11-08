import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

interface LoginFormData {
  email: string
  password: string
}

export default function Login() {
  const [loginStatus, setLoginStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>()

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Simulate login (mock behavior as specified)
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Login attempt with:', data)
      setLoginStatus('success')
    } catch (error) {
      setLoginStatus('error')
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          {loginStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-2 text-green-800">
              <CheckCircle2 className="h-5 w-5" />
              <p>Login successful! (Mock login - no actual authentication)</p>
            </div>
          )}

          {loginStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-800">
              <AlertCircle className="h-5 w-5" />
              <p>Login failed. Please try again.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
