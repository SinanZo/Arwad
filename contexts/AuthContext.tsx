'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => void
}

interface User {
  id: string
  name: string
  email: string
  company?: string
  role?: string
}

interface RegisterData {
  name: string
  email: string
  password: string
  company?: string
  role?: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check for saved session
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Mock authentication
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email,
      company: 'Example Corp',
      role: 'Procurement Manager',
    }

    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const register = async (data: RegisterData) => {
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      company: data.company,
      role: data.role,
    }

    setUser(newUser)
    setIsAuthenticated(true)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
