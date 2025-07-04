"use client"

import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AdminDashboard } from '@/components/careers/admin-dashboard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Shield, 
  Lock, 
  Users, 
  FileText, 
  Settings,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { CareerApplication } from '@/lib/career-utils'

// Simple authentication - in production, use proper authentication
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'websjyoti2024'
}

export default function CareerAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [loginError, setLoginError] = useState('')
  const [applications, setApplications] = useState<CareerApplication[]>([])
  const { toast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')

    if (
      loginForm.username === ADMIN_CREDENTIALS.username &&
      loginForm.password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true)
      toast({
        title: "Login Successful",
        description: "Welcome to the Career Admin Dashboard",
      })
    } else {
      setLoginError('Invalid username or password')
    }
  }

  const handleStatusUpdate = (applicationId: string, status: CareerApplication['status']) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === applicationId 
          ? { ...app, status }
          : app
      )
    )
    
    toast({
      title: "Status Updated",
      description: `Application ${applicationId} status changed to ${status}`,
    })
  }

  const handleDeleteApplication = (applicationId: string) => {
    setApplications(prev => prev.filter(app => app.id !== applicationId))
    
    toast({
      title: "Application Deleted",
      description: `Application ${applicationId} has been removed`,
      variant: "destructive"
    })
  }

  const handleExportData = () => {
    toast({
      title: "Export Started",
      description: "Your data export will begin shortly",
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
          <Card className="w-full max-w-md bg-white border border-gray-200 shadow-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Admin Access Required
              </CardTitle>
              <CardDescription>
                Please login to access the career management dashboard
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>

                {loginError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{loginError}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full">
                  <Lock className="w-4 h-4 mr-2" />
                  Login to Dashboard
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Demo Credentials:</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>Username: <code className="bg-blue-100 px-1 rounded">admin</code></div>
                  <div>Password: <code className="bg-blue-100 px-1 rounded">websjyoti2024</code></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Admin Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-600" />
                Career Management Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage job applications and recruitment process
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Logged in as Admin</span>
              </div>
              
              <Button
                variant="outline"
                onClick={() => setIsAuthenticated(false)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Application Review</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Review and process new applications
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Candidate Management</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Track candidate progress and status
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">System Settings</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Configure positions and requirements
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <AdminDashboard
          applications={applications}
          onStatusUpdate={handleStatusUpdate}
          onDeleteApplication={handleDeleteApplication}
          onExportData={handleExportData}
        />

        {/* Security Notice */}
        <Card className="mt-8 border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-orange-900">Security Notice</h4>
                <p className="text-sm text-orange-700 mt-1">
                  This is a demo admin panel. In production, implement proper authentication, 
                  authorization, and data protection measures. All sensitive data should be 
                  encrypted and access should be logged for security auditing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
