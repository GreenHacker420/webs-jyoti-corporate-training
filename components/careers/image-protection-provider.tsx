"use client"

import React, { useEffect } from 'react'

interface ImageProtectionProviderProps {
  children: React.ReactNode
}

export function ImageProtectionProvider({ children }: ImageProtectionProviderProps) {
  useEffect(() => {
    // Only initialize in browser environment
    if (typeof window === 'undefined') return

    // Initialize image protection when the app loads
    const initializeImageProtection = async () => {
      try {
        const { initializeImageProtection: initProtection } = await import('@/lib/watermark')
        initProtection()
      } catch (error) {
        console.warn('Failed to initialize image protection:', error)
      }
    }

    initializeImageProtection()
    
    // Add additional protection measures
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent common screenshot/copy shortcuts
      if (
        (e.ctrlKey && (e.key === 's' || e.key === 'S')) || // Ctrl+S (Save)
        (e.ctrlKey && (e.key === 'p' || e.key === 'P')) || // Ctrl+P (Print)
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) || // Ctrl+Shift+I (DevTools)
        (e.key === 'F12') || // F12 (DevTools)
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) || // Ctrl+Shift+C (Inspect)
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) // Ctrl+U (View Source)
      ) {
        e.preventDefault()
        showProtectionNotice('Keyboard shortcut disabled for content protection')
      }
    }

    const handlePrint = (e: Event) => {
      e.preventDefault()
      showProtectionNotice('Printing is disabled to protect our content')
    }

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('beforeprint', handlePrint)

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('beforeprint', handlePrint)
    }
  }, [])

  const showProtectionNotice = (message: string) => {
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
        animation: slideIn 0.3s ease-out;
      ">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <circle cx="12" cy="16" r="1"></circle>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <strong>Content Protected</strong>
        </div>
        <div style="font-size: 13px; opacity: 0.9; line-height: 1.4;">
          ${message}
        </div>
      </div>
      
      <style>
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      </style>
    `
    
    document.body.appendChild(notification)
    
    // Remove notification after 4 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = 'slideOut 0.3s ease-in'
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification)
          }
        }, 300)
      }
    }, 4000)
  }

  return <>{children}</>
}
