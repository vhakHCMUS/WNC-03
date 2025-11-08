import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { registerUser, RegisterData } from '@/lib/api'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { AxiosError } from 'axios'

const schema = yup.object({
  email: yup
    .string()
    .email('Email must be valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
})

interface SignUpFormData {
  email: string
  password: string
}

export default function SignUp() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
  })

  const mutation = useMutation({
    mutationFn: (data: RegisterData) => registerUser(data),
    onSuccess: () => {
      reset()
    },
  })

  const onSubmit = (data: SignUpFormData) => {
    mutation.mutate(data)
  }

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Create a new account to get started
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
                {...register('email')}
                disabled={mutation.isPending}
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
                placeholder="Enter your password (min 6 characters)"
                {...register('password')}
                disabled={mutation.isPending}
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={mutation.isPending}>
              {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {mutation.isPending ? 'Creating Account...' : 'Sign Up'}
            </Button>
          </form>

          {mutation.isSuccess && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-2 text-green-800">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Success!</p>
                <p className="text-sm">Account created successfully. You can now login.</p>
              </div>
            </div>
          )}

          {mutation.isError && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-800">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Error</p>
                <p className="text-sm">
                  {mutation.error instanceof AxiosError && mutation.error.response?.data?.message
                    ? mutation.error.response.data.message
                    : 'Failed to create account. Please try again.'}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
