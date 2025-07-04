"use client"

import React, { useState, useEffect } from 'react'
import { Search, MapPin, Award, Briefcase, User, Filter, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { skillsData, getAllSkillCategories } from '@/data/skills'
import { getAllCareerLocations, getAllDepartments } from '@/data/career-positions'
import { getAllLocations, trainersData } from '@/data/trainers'
import { cn } from '@/lib/utils'

export interface SearchFilters {
  keyword?: string
  location?: string
  skills?: string[]
  experience?: string
  department?: string
  trainerName?: string
  positionType?: string
}

interface CareerSearchFiltersProps {
  onFiltersChange: (filters: SearchFilters) => void
  className?: string
  showTrainerSearch?: boolean
}

export function CareerSearchFilters({ 
  onFiltersChange, 
  className,
  showTrainerSearch = false 
}: CareerSearchFiltersProps) {
  const [filters, setFilters] = useState<SearchFilters>({})
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const locations = [...new Set([...getAllCareerLocations(), ...getAllLocations()])]
  const departments = getAllDepartments()
  const skillCategories = getAllSkillCategories()
  const trainerNames = trainersData.map(trainer => trainer.name)

  const experienceRanges = [
    { value: 'fresher', label: 'Fresher (0 years)' },
    { value: '0-2', label: '0-2 years' },
    { value: '2-5', label: '2-5 years' },
    { value: '5-10', label: '5-10 years' },
    { value: '10+', label: '10+ years' }
  ]

  const positionTypes = [
    { value: 'Full-time', label: 'Full-time' },
    { value: 'Part-time', label: 'Part-time' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Freelance', label: 'Freelance' }
  ]

  // Update filters when any filter changes
  useEffect(() => {
    const updatedFilters = {
      ...filters,
      skills: selectedSkills.length > 0 ? selectedSkills : undefined
    }
    onFiltersChange(updatedFilters)
  }, [filters, selectedSkills, onFiltersChange])

  const handleFilterChange = (key: keyof SearchFilters, value: string | undefined) => {
    setFilters(prev => ({
      ...prev,
      [key]: value || undefined
    }))
  }

  const handleSkillToggle = (skillName: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillName)
        ? prev.filter(skill => skill !== skillName)
        : [...prev, skillName]
    )
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    handleFilterChange('keyword', value)
  }

  const clearAllFilters = () => {
    setFilters({})
    setSelectedSkills([])
    setSearchQuery('')
    setIsFiltersOpen(false)
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== undefined) || selectedSkills.length > 0

  return (
    <Card className={cn('w-full bg-white border border-gray-200 shadow-sm', className)}>
      <CardContent className="p-6">
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search positions, skills, or keywords..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 pr-4 h-12 text-base"
          />
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Advanced Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
                {Object.values(filters).filter(v => v).length + selectedSkills.length}
              </Badge>
            )}
          </Button>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <X className="w-4 h-4 mr-1" />
              Clear All
            </Button>
          )}
        </div>

        {/* Advanced Filters */}
        <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <CollapsibleContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Location Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Location
                </label>
                <Select
                  value={filters.location || ''}
                  onValueChange={(value) => handleFilterChange('location', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Locations</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Experience Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" />
                  Experience Level
                </label>
                <Select
                  value={filters.experience || ''}
                  onValueChange={(value) => handleFilterChange('experience', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Levels</SelectItem>
                    {experienceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Department Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  Department
                </label>
                <Select
                  value={filters.department || ''}
                  onValueChange={(value) => handleFilterChange('department', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Departments</SelectItem>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Position Type Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Position Type
                </label>
                <Select
                  value={filters.positionType || ''}
                  onValueChange={(value) => handleFilterChange('positionType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    {positionTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Trainer Search (if enabled) */}
              {showTrainerSearch && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    Trainer Name
                  </label>
                  <Select
                    value={filters.trainerName || ''}
                    onValueChange={(value) => handleFilterChange('trainerName', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select trainer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Trainers</SelectItem>
                      {trainerNames.map((name) => (
                        <SelectItem key={name} value={name}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* Skills Filter */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Award className="w-4 h-4 mr-1" />
                Skills & Expertise
              </label>
              
              <div className="space-y-3">
                {skillCategories.slice(0, 5).map((category) => {
                  const categorySkills = skillsData
                    .filter(skill => skill.category === category)
                    .slice(0, 8) // Limit to prevent UI overflow

                  return (
                    <div key={category}>
                      <h4 className="text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <Badge
                            key={skill.id}
                            variant={selectedSkills.includes(skill.name) ? "default" : "outline"}
                            className="cursor-pointer hover:bg-blue-100 transition-colors text-xs"
                            onClick={() => handleSkillToggle(skill.name)}
                          >
                            {skill.name}
                            {selectedSkills.includes(skill.name) && (
                              <X className="w-3 h-3 ml-1" />
                            )}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Selected Filters Summary */}
            {hasActiveFilters && (
              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h4>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(filters).map(([key, value]) => {
                    if (!value) return null
                    return (
                      <Badge key={key} variant="secondary" className="text-xs">
                        {key}: {value}
                        <X 
                          className="w-3 h-3 ml-1 cursor-pointer" 
                          onClick={() => handleFilterChange(key as keyof SearchFilters, undefined)}
                        />
                      </Badge>
                    )
                  })}
                  {selectedSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                      <X 
                        className="w-3 h-3 ml-1 cursor-pointer" 
                        onClick={() => handleSkillToggle(skill)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
