"use client"

import React from "react"
import { AlertTriangle } from "lucide-react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  sectionName?: string
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error in ${this.props.sectionName || 'component'}:`, error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <div>
              <h3 className="font-semibold text-red-800">
                {this.props.sectionName ? `Error in ${this.props.sectionName}` : 'Something went wrong'}
              </h3>
              <p className="text-red-600 text-sm mt-1">
                This section failed to load. Please refresh the page or contact support if the issue persists.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-2">
                  <summary className="text-xs text-red-500 cursor-pointer">Error Details</summary>
                  <pre className="text-xs text-red-500 mt-1 overflow-auto">
                    {this.state.error.message}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Simple functional wrapper for easier use
export function SafeSection({ 
  children, 
  sectionName, 
  fallback 
}: { 
  children: React.ReactNode
  sectionName?: string
  fallback?: React.ReactNode 
}) {
  return (
    <ErrorBoundary sectionName={sectionName} fallback={fallback}>
      {children}
    </ErrorBoundary>
  )
}
