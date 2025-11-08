import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to User Registration App</h1>
        <p className="text-xl text-muted-foreground">
          A full-stack application built with NestJS, React, and SQLite
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>New User?</CardTitle>
            <CardDescription>
              Create a new account to get started with our platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/signup">
              <Button className="w-full">Sign Up</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Already Have an Account?</CardTitle>
            <CardDescription>
              Sign in to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/login">
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Secure user registration with password hashing (bcrypt)</li>
            <li>Email validation</li>
            <li>RESTful API built with NestJS</li>
            <li>SQLite database with Prisma ORM</li>
            <li>Modern React frontend with TypeScript</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Form validation with React Hook Form and Yup</li>
            <li>API state management with React Query</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
