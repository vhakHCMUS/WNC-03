import { Outlet, Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function Layout() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">
              User Registration App
            </Link>
            <div className="flex gap-4">
              <Link
                to="/"
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  isActive("/")
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                )}
              >
                Home
              </Link>
              <Link
                to="/login"
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  isActive("/login")
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                )}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  isActive("/signup")
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                )}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
