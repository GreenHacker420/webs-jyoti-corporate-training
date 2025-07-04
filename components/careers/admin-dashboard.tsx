"use client"

import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Trash2, 
  Users, 
  FileText, 
  Clock, 
  CheckCircle,
  XCircle,
  AlertCircle,
  BarChart3,
  TrendingUp,
  Calendar
} from 'lucide-react'
import { 
  CareerApplication, 
  formatApplicationStatus, 
  getApplicationStats,
  exportApplicationsToCSV,
  filterApplications,
  sortApplicationsByDate,
  SearchFilters
} from '@/lib/career-utils'

// Mock data for demonstration
const mockApplications: CareerApplication[] = [
  {
    id: 'APP_1704067200_ABC123',
    fullName: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 9876543210',
    linkedinProfile: 'https://linkedin.com/in/rajeshkumar',
    currentLocation: 'Delhi NCR',
    yearsOfExperience: 5,
    skills: ['Data Analytics', 'Excel', 'Power BI'],
    positionsAppliedFor: ['Senior Data Analytics Trainer'],
    cvUrl: '/mock-cv-1.pdf',
    cvFileName: 'cv_rajesh_kumar_1704067200.pdf',
    status: 'pending',
    appliedDate: '2024-01-01T10:00:00Z',
    notes: 'Strong background in analytics'
  },
  {
    id: 'APP_1704153600_DEF456',
    fullName: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 9876543211',
    currentLocation: 'Mumbai',
    yearsOfExperience: 3,
    skills: ['Excel', 'VBA', 'Financial Modeling'],
    positionsAppliedFor: ['Excel Training Specialist'],
    cvUrl: '/mock-cv-2.pdf',
    cvFileName: 'cv_priya_sharma_1704153600.pdf',
    status: 'reviewing',
    appliedDate: '2024-01-02T14:30:00Z'
  },
  {
    id: 'APP_1704240000_GHI789',
    fullName: 'Amit Patel',
    email: 'amit.patel@email.com',
    phone: '+91 9876543212',
    linkedinProfile: 'https://linkedin.com/in/amitpatel',
    currentLocation: 'Bangalore',
    yearsOfExperience: 7,
    skills: ['Power BI', 'DAX', 'Business Intelligence'],
    positionsAppliedFor: ['Power BI Consultant'],
    cvUrl: '/mock-cv-3.pdf',
    cvFileName: 'cv_amit_patel_1704240000.pdf',
    status: 'shortlisted',
    appliedDate: '2024-01-03T09:15:00Z',
    notes: 'Excellent Power BI skills, scheduled for interview'
  }
]

interface AdminDashboardProps {
  applications?: CareerApplication[]
  onStatusUpdate?: (applicationId: string, status: CareerApplication['status']) => void
  onDeleteApplication?: (applicationId: string) => void
  onExportData?: () => void
}

export function AdminDashboard({
  applications = mockApplications,
  onStatusUpdate,
  onDeleteApplication,
  onExportData
}: AdminDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [selectedApplication, setSelectedApplication] = useState<CareerApplication | null>(null)

  const stats = getApplicationStats(applications)

  const filteredApplications = useMemo(() => {
    let filtered = applications

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(app =>
        app.fullName.toLowerCase().includes(query) ||
        app.email.toLowerCase().includes(query) ||
        app.currentLocation.toLowerCase().includes(query) ||
        app.skills.some(skill => skill.toLowerCase().includes(query)) ||
        app.positionsAppliedFor.some(pos => pos.toLowerCase().includes(query))
      )
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(app => app.status === statusFilter)
    }

    // Sort by date
    return sortApplicationsByDate(filtered, sortOrder)
  }, [applications, searchQuery, statusFilter, sortOrder])

  const handleStatusUpdate = (applicationId: string, newStatus: CareerApplication['status']) => {
    onStatusUpdate?.(applicationId, newStatus)
  }

  const handleExportCSV = () => {
    const csvContent = exportApplicationsToCSV(filteredApplications)
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `career_applications_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Shortlisted</p>
                <p className="text-2xl font-bold text-green-600">{stats.shortlisted}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hired</p>
                <p className="text-2xl font-bold text-emerald-600">{stats.hired}</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Application Management</CardTitle>
              <CardDescription>
                Manage and review career applications
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportCSV}
                className="flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search applications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewing">Under Review</SelectItem>
                <SelectItem value="shortlisted">Shortlisted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="hired">Hired</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortOrder} onValueChange={(value: 'asc' | 'desc') => setSortOrder(value)}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desc">Newest First</SelectItem>
                <SelectItem value="asc">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Applications Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((application) => {
                  const statusInfo = formatApplicationStatus(application.status)
                  
                  return (
                    <TableRow key={application.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium text-gray-900">
                            {application.fullName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {application.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {application.positionsAppliedFor.join(', ')}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {application.yearsOfExperience} years
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {application.currentLocation}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${statusInfo.bgColor} ${statusInfo.color} border-0`}>
                          {statusInfo.label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                          {formatDate(application.appliedDate)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedApplication(application)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          
                          <Select
                            value={application.status}
                            onValueChange={(value: CareerApplication['status']) => 
                              handleStatusUpdate(application.id, value)
                            }
                          >
                            <SelectTrigger className="w-32 h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="reviewing">Reviewing</SelectItem>
                              <SelectItem value="shortlisted">Shortlisted</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                              <SelectItem value="hired">Hired</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>

          {filteredApplications.length === 0 && (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No applications found
              </h3>
              <p className="text-gray-600">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Try adjusting your search criteria'
                  : 'No applications have been submitted yet'
                }
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
