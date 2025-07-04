"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  Calendar, 
  DollarSign, 
  Users, 
  ArrowRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { CareerPosition } from '@/data/career-positions'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CareerCardProps {
  position: CareerPosition
  className?: string
  showFullDescription?: boolean
  onApply?: (positionId: number) => void
}

export function CareerCard({ 
  position, 
  className, 
  showFullDescription = false,
  onApply 
}: CareerCardProps) {
  const isDeadlineApproaching = position.applicationDeadline && 
    new Date(position.applicationDeadline) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

  const isExpired = position.applicationDeadline && 
    new Date(position.applicationDeadline) < new Date()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getPositionTypeColor = (type: CareerPosition['type']) => {
    const colors = {
      'Full-time': 'bg-green-100 text-green-800',
      'Part-time': 'bg-blue-100 text-blue-800',
      'Contract': 'bg-orange-100 text-orange-800',
      'Freelance': 'bg-purple-100 text-purple-800'
    }
    return colors[type] || 'bg-gray-100 text-gray-800'
  }

  return (
    <Card className={cn(
      'h-full bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group hover:border-blue-300',
      isExpired && 'opacity-60',
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {position.title}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-1">
              {position.department}
            </CardDescription>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <Badge className={cn('text-xs font-medium', getPositionTypeColor(position.type))}>
              {position.type}
            </Badge>
            {!position.isActive && (
              <Badge variant="secondary" className="text-xs">
                Inactive
              </Badge>
            )}
          </div>
        </div>

        {/* Key Information */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{position.location.slice(0, 2).join(', ')}{position.location.length > 2 && ` +${position.location.length - 2} more`}</span>
          </div>
          
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-1" />
            <span>{position.experience}</span>
          </div>
          
          {position.salary && (
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>{position.salary}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Description */}
        <div className="mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            {showFullDescription 
              ? position.description 
              : `${position.description.substring(0, 120)}${position.description.length > 120 ? '...' : ''}`
            }
          </p>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Required Skills:</h4>
          <div className="flex flex-wrap gap-1">
            {position.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {position.skills.length > 4 && (
              <Badge variant="outline" className="text-xs text-gray-500">
                +{position.skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Key Requirements (if showing full description) */}
        {showFullDescription && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Requirements:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              {position.requirements.slice(0, 3).map((req, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
              {position.requirements.length > 3 && (
                <li className="text-xs text-gray-500 ml-5">
                  +{position.requirements.length - 3} more requirements
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Dates and Deadline */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            <span>Posted: {formatDate(position.postedDate)}</span>
          </div>
          
          {position.applicationDeadline && (
            <div className={cn(
              "flex items-center",
              isDeadlineApproaching && !isExpired && "text-orange-600",
              isExpired && "text-red-600"
            )}>
              {isExpired ? (
                <AlertCircle className="w-3 h-3 mr-1" />
              ) : (
                <Clock className="w-3 h-3 mr-1" />
              )}
              <span>
                {isExpired ? 'Expired: ' : 'Deadline: '}
                {formatDate(position.applicationDeadline)}
              </span>
            </div>
          )}
        </div>

        {/* Deadline Warning */}
        {isDeadlineApproaching && !isExpired && (
          <div className="mb-4 p-2 bg-orange-50 border border-orange-200 rounded-md">
            <div className="flex items-center text-orange-800 text-xs">
              <AlertCircle className="w-3 h-3 mr-1" />
              <span>Application deadline approaching!</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {!isExpired && position.isActive ? (
            <>
              <Button
                onClick={() => onApply?.(position.id)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              
              {!showFullDescription && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-blue-50 hover:border-blue-300"
                >
                  <Link href={`/careers/positions/${position.id}`}>
                    View Details
                  </Link>
                </Button>
              )}
            </>
          ) : (
            <Button
              disabled
              variant="outline"
              className="flex-1 cursor-not-allowed"
            >
              {isExpired ? 'Application Closed' : 'Position Inactive'}
            </Button>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>ID: {position.id}</span>
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              <span>Multiple openings available</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
