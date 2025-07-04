"use client"

import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, File, X, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { validateCVFile, generateCVFileName } from '@/lib/career-utils'

interface FileUploadProps {
  onFileUpload: (file: File, fileName: string) => void
  onFileRemove: () => void
  currentFile?: File | null
  currentFileName?: string
  applicantName?: string
  disabled?: boolean
  className?: string
}

export function FileUpload({
  onFileUpload,
  onFileRemove,
  currentFile,
  currentFileName,
  applicantName = 'applicant',
  disabled = false,
  className
}: FileUploadProps) {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    // Validate file
    const validation = validateCVFile(file)
    if (!validation.isValid) {
      setError(validation.error || 'Invalid file')
      return
    }

    setError(null)
    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + 10
      })
    }, 100)

    try {
      // Generate unique filename
      const fileName = generateCVFileName(file.name, applicantName)
      
      // Complete progress
      clearInterval(progressInterval)
      setUploadProgress(100)
      
      // Call parent handler
      onFileUpload(file, fileName)
      
      setTimeout(() => {
        setUploadProgress(0)
        setIsUploading(false)
      }, 500)
    } catch (error) {
      clearInterval(progressInterval)
      setError('Failed to upload file. Please try again.')
      setIsUploading(false)
      setUploadProgress(0)
    }
  }, [onFileUpload, applicantName])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    disabled: disabled || isUploading
  })

  const handleRemoveFile = () => {
    setError(null)
    setUploadProgress(0)
    onFileRemove()
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className={cn('w-full', className)}>
      {!currentFile ? (
        <div
          {...getRootProps()}
          className={cn(
            'border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors bg-white',
            isDragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50',
            disabled && 'opacity-50 cursor-not-allowed',
            error && 'border-red-300 bg-red-50'
          )}
        >
          <input {...getInputProps()} />
          
          <div className="flex flex-col items-center space-y-4">
            <div className={cn(
              'w-12 h-12 rounded-full flex items-center justify-center',
              error ? 'bg-red-100' : 'bg-blue-100'
            )}>
              {error ? (
                <AlertCircle className="w-6 h-6 text-red-600" />
              ) : (
                <Upload className="w-6 h-6 text-blue-600" />
              )}
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-900">
                {isDragActive ? 'Drop your CV here' : 'Upload your CV/Resume'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Drag and drop or click to browse
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Supports PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>
          </div>

          {isUploading && (
            <div className="mt-4">
              <Progress value={uploadProgress} className="w-full" />
              <p className="text-sm text-gray-500 mt-2">
                Uploading... {uploadProgress}%
              </p>
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg p-4 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  {currentFileName || currentFile.name}
                </p>
                <p className="text-sm text-gray-500">
                  {formatFileSize(currentFile.size)} • Uploaded successfully
                </p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemoveFile}
              disabled={disabled}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {isUploading && (
            <div className="mt-3">
              <Progress value={uploadProgress} className="w-full" />
            </div>
          )}
        </div>
      )}

      <div className="mt-2 text-xs text-gray-500">
        <p>• Accepted formats: PDF, DOC, DOCX</p>
        <p>• Maximum file size: 5MB</p>
        <p>• Your file will be securely stored and only used for recruitment purposes</p>
      </div>
    </div>
  )
}
