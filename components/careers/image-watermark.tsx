"use client"

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface WatermarkedImageProps {
  src: string
  alt: string
  className?: string
  watermarkText?: string
  watermarkOpacity?: number
  enableProtection?: boolean
  onLoad?: () => void
  onError?: () => void
  [key: string]: any
}

export function WatermarkedImage({
  src,
  alt,
  className,
  watermarkText = 'Webs Jyoti',
  watermarkOpacity = 0.3,
  enableProtection = true,
  onLoad,
  onError,
  ...props
}: WatermarkedImageProps) {
  const [watermarkedSrc, setWatermarkedSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const applyWatermark = async () => {
      // Only apply watermark in browser environment
      if (typeof window === 'undefined') {
        setWatermarkedSrc(src)
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        setHasError(false)

        // Dynamically import watermark functionality
        const { imageWatermark } = await import('@/lib/watermark')

        if (!imageWatermark) {
          throw new Error('Watermark not available')
        }

        const watermarked = await imageWatermark.applyTiledWatermark(src, {
          text: watermarkText,
          opacity: watermarkOpacity,
          fontSize: 16,
          fontFamily: 'Arial',
          color: '#ffffff',
          rotation: -45
        })

        setWatermarkedSrc(watermarked)
        onLoad?.()
      } catch (error) {
        console.warn('Failed to apply watermark, using original image:', error)
        setWatermarkedSrc(src)
        setHasError(true)
        onError?.()
      } finally {
        setIsLoading(false)
      }
    }

    if (src) {
      applyWatermark()
    }
  }, [src, watermarkText, watermarkOpacity, onLoad, onError])

  useEffect(() => {
    if (enableProtection && typeof window !== 'undefined') {
      const initProtection = async () => {
        try {
          const { initializeImageProtection } = await import('@/lib/watermark')
          initializeImageProtection()
        } catch (error) {
          console.warn('Failed to initialize image protection:', error)
        }
      }
      initProtection()
    }
  }, [enableProtection])

  const handleContextMenu = (e: React.MouseEvent) => {
    if (enableProtection) {
      e.preventDefault()
      showProtectionNotice()
    }
  }

  const handleDragStart = (e: React.DragEvent) => {
    if (enableProtection) {
      e.preventDefault()
      showProtectionNotice()
    }
  }

  const showProtectionNotice = () => {
    // Create a temporary notification
    const notification = document.createElement('div')
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #1e40af 0%, #312e81 100%);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        max-width: 320px;
        border: 1px solid rgba(255,255,255,0.1);
      ">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <circle cx="12" cy="16" r="1"></circle>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <strong>Image Protected</strong>
        </div>
        <div style="font-size: 13px; opacity: 0.9; line-height: 1.4;">
          This image is protected by Webs Jyoti's watermark system and cannot be copied or downloaded.
        </div>
      </div>
    `
    
    document.body.appendChild(notification)
    
    // Remove notification after 4 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 4000)
  }

  if (isLoading) {
    return (
      <div 
        className={cn(
          'bg-gray-200 animate-pulse flex items-center justify-center',
          className
        )}
        {...props}
      >
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    )
  }

  return (
    <img
      ref={imgRef}
      src={watermarkedSrc}
      alt={alt}
      className={cn(
        'select-none',
        enableProtection && 'pointer-events-auto',
        className
      )}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitUserDrag: 'none',
        KhtmlUserDrag: 'none',
        MozUserDrag: 'none',
        OUserDrag: 'none',
        userDrag: 'none'
      }}
      {...props}
    />
  )
}

// Hook for applying watermarks to existing images
export function useImageWatermark() {
  const applyWatermarkToImage = async (
    imageElement: HTMLImageElement,
    options?: {
      text?: string
      opacity?: number
      position?: 'center' | 'tiled'
    }
  ) => {
    // Only work in browser environment
    if (typeof window === 'undefined') {
      return imageElement.src
    }

    try {
      const { text = 'Webs Jyoti', opacity = 0.3, position = 'tiled' } = options || {}

      // Dynamically import watermark functionality
      const { imageWatermark } = await import('@/lib/watermark')

      if (!imageWatermark) {
        throw new Error('Watermark not available')
      }

      const watermarkMethod = position === 'tiled'
        ? imageWatermark.applyTiledWatermark
        : imageWatermark.applyWatermark

      const watermarkedSrc = await watermarkMethod(imageElement.src, {
        text,
        opacity,
        fontSize: 16,
        fontFamily: 'Arial',
        color: '#ffffff',
        rotation: -45
      })

      imageElement.src = watermarkedSrc
      imageElement.dataset.watermarked = 'true'

      return watermarkedSrc
    } catch (error) {
      console.warn('Failed to apply watermark:', error)
      return imageElement.src
    }
  }

  const watermarkAllImagesOnPage = async (options?: {
    text?: string
    opacity?: number
    selector?: string
  }) => {
    const { selector = 'img:not([data-watermarked])' } = options || {}
    const images = document.querySelectorAll<HTMLImageElement>(selector)
    
    const promises = Array.from(images).map(img => 
      applyWatermarkToImage(img, options)
    )
    
    try {
      await Promise.all(promises)
      console.log(`Applied watermarks to ${images.length} images`)
    } catch (error) {
      console.warn('Some watermarks failed to apply:', error)
    }
  }

  return {
    applyWatermarkToImage,
    watermarkAllImagesOnPage
  }
}

// Component for protecting a gallery of images
interface ProtectedGalleryProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  className?: string
  imageClassName?: string
  watermarkText?: string
  watermarkOpacity?: number
}

export function ProtectedGallery({
  images,
  className,
  imageClassName,
  watermarkText = 'Webs Jyoti',
  watermarkOpacity = 0.2
}: ProtectedGalleryProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <WatermarkedImage
            src={image.src}
            alt={image.alt}
            className={cn(
              'w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105',
              imageClassName
            )}
            watermarkText={watermarkText}
            watermarkOpacity={watermarkOpacity}
            enableProtection={true}
          />
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
              <p className="text-white text-sm font-medium">{image.caption}</p>
            </div>
          )}
          
          {/* Protection overlay */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-blue-500/10 transition-colors duration-300 rounded-lg pointer-events-none" />
        </div>
      ))}
    </div>
  )
}
