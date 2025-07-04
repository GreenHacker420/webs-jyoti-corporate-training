// Image watermarking utilities for protecting website images

export interface WatermarkOptions {
  text?: string
  logoUrl?: string
  opacity?: number
  position?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  fontSize?: number
  fontFamily?: string
  color?: string
  rotation?: number
}

export class ImageWatermark {
  private canvas: HTMLCanvasElement | null = null
  private ctx: CanvasRenderingContext2D | null = null

  constructor() {
    // Only initialize canvas in browser environment
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this.canvas = document.createElement('canvas')
      this.ctx = this.canvas.getContext('2d')
    }
  }

  private ensureCanvas(): boolean {
    if (!this.canvas || !this.ctx) {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        return this.canvas !== null && this.ctx !== null
      }
      return false
    }
    return true
  }

  // Apply watermark to an image
  async applyWatermark(
    imageUrl: string,
    options: WatermarkOptions = {}
  ): Promise<string> {
    // Check if we're in browser environment
    if (!this.ensureCanvas()) {
      throw new Error('Canvas not available - watermarking only works in browser environment')
    }

    const {
      text = 'Webs Jyoti',
      opacity = 0.3,
      position = 'center',
      fontSize = 24,
      fontFamily = 'Arial',
      color = '#ffffff',
      rotation = -45
    } = options

    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'

      img.onload = () => {
        try {
          if (!this.canvas || !this.ctx) {
            reject(new Error('Canvas not initialized'))
            return
          }

          // Set canvas dimensions
          this.canvas.width = img.width
          this.canvas.height = img.height

          // Draw original image
          this.ctx.drawImage(img, 0, 0)

          // Apply watermark
          this.ctx.save()
          this.ctx.globalAlpha = opacity
          this.ctx.font = `${fontSize}px ${fontFamily}`
          this.ctx.fillStyle = color
          this.ctx.textAlign = 'center'
          this.ctx.textBaseline = 'middle'

          // Calculate position
          const { x, y } = this.calculatePosition(position, img.width, img.height)

          // Apply rotation
          this.ctx.translate(x, y)
          this.ctx.rotate((rotation * Math.PI) / 180)

          // Draw text watermark
          this.ctx.fillText(text, 0, 0)

          // If logo is provided, draw it as well
          if (options.logoUrl) {
            this.drawLogoWatermark(options.logoUrl, x, y)
          }

          this.ctx.restore()

          // Convert to data URL
          const watermarkedImage = this.canvas.toDataURL('image/png', 0.9)
          resolve(watermarkedImage)
        } catch (error) {
          reject(error)
        }
      }

      img.onerror = () => {
        reject(new Error('Failed to load image'))
      }

      img.src = imageUrl
    })
  }

  // Apply tiled watermark pattern
  async applyTiledWatermark(
    imageUrl: string,
    options: WatermarkOptions = {}
  ): Promise<string> {
    // Check if we're in browser environment
    if (!this.ensureCanvas()) {
      throw new Error('Canvas not available - watermarking only works in browser environment')
    }

    const {
      text = 'Webs Jyoti',
      opacity = 0.1,
      fontSize = 16,
      fontFamily = 'Arial',
      color = '#ffffff',
      rotation = -45
    } = options

    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'

      img.onload = () => {
        try {
          if (!this.canvas || !this.ctx) {
            reject(new Error('Canvas not initialized'))
            return
          }

          this.canvas.width = img.width
          this.canvas.height = img.height

          // Draw original image
          this.ctx.drawImage(img, 0, 0)

          // Apply tiled watermark
          this.ctx.save()
          this.ctx.globalAlpha = opacity
          this.ctx.font = `${fontSize}px ${fontFamily}`
          this.ctx.fillStyle = color
          this.ctx.textAlign = 'center'
          this.ctx.textBaseline = 'middle'

          // Calculate tile spacing
          const tileSpacing = 150
          const rows = Math.ceil(img.height / tileSpacing)
          const cols = Math.ceil(img.width / tileSpacing)

          // Draw watermark tiles
          for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
              const x = (col * tileSpacing) + (tileSpacing / 2)
              const y = (row * tileSpacing) + (tileSpacing / 2)

              this.ctx.save()
              this.ctx.translate(x, y)
              this.ctx.rotate((rotation * Math.PI) / 180)
              this.ctx.fillText(text, 0, 0)
              this.ctx.restore()
            }
          }

          this.ctx.restore()

          const watermarkedImage = this.canvas.toDataURL('image/png', 0.9)
          resolve(watermarkedImage)
        } catch (error) {
          reject(error)
        }
      }

      img.onerror = () => {
        reject(new Error('Failed to load image'))
      }

      img.src = imageUrl
    })
  }

  // Draw logo watermark
  private drawLogoWatermark(logoUrl: string, x: number, y: number): void {
    if (!this.ctx) return

    const logo = new Image()
    logo.crossOrigin = 'anonymous'

    logo.onload = () => {
      if (!this.ctx) return

      const logoSize = 50
      this.ctx.drawImage(
        logo,
        x - logoSize / 2,
        y - logoSize / 2 - 30,
        logoSize,
        logoSize
      )
    }

    logo.src = logoUrl
  }

  // Calculate watermark position
  private calculatePosition(
    position: WatermarkOptions['position'],
    width: number,
    height: number
  ): { x: number; y: number } {
    const margin = 50

    switch (position) {
      case 'top-left':
        return { x: margin, y: margin }
      case 'top-right':
        return { x: width - margin, y: margin }
      case 'bottom-left':
        return { x: margin, y: height - margin }
      case 'bottom-right':
        return { x: width - margin, y: height - margin }
      case 'center':
      default:
        return { x: width / 2, y: height / 2 }
    }
  }
}

// Utility functions for image protection

// Prevent right-click context menu on images
export function preventImageRightClick(): void {
  document.addEventListener('contextmenu', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'IMG') {
      e.preventDefault()
      showWatermarkWarning()
    }
  })
}

// Prevent drag and drop of images
export function preventImageDragDrop(): void {
  document.addEventListener('dragstart', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'IMG') {
      e.preventDefault()
      showWatermarkWarning()
    }
  })
}

// Show warning message when user tries to copy images
function showWatermarkWarning(): void {
  // Create a temporary notification
  const notification = document.createElement('div')
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: #1e40af;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      max-width: 300px;
    ">
      <strong>Image Protected</strong><br>
      This image is protected by Webs Jyoti watermark system.
    </div>
  `
  
  document.body.appendChild(notification)
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification)
    }
  }, 3000)
}

// Initialize image protection
export function initializeImageProtection(): void {
  if (typeof window !== 'undefined') {
    preventImageRightClick()
    preventImageDragDrop()
    
    // Add CSS to prevent image selection
    const style = document.createElement('style')
    style.textContent = `
      img {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
        pointer-events: auto;
      }
      
      img::selection {
        background: transparent;
      }
      
      img::-moz-selection {
        background: transparent;
      }
    `
    document.head.appendChild(style)
  }
}

// Apply watermark to all images on page load
export function watermarkAllImages(options: WatermarkOptions = {}): void {
  if (typeof window === 'undefined') return

  const watermark = new ImageWatermark()
  const images = document.querySelectorAll('img')

  images.forEach(async (img) => {
    try {
      // Skip if already watermarked
      if (img.dataset.watermarked === 'true') return

      const watermarkedSrc = await watermark.applyTiledWatermark(img.src, options)
      img.src = watermarkedSrc
      img.dataset.watermarked = 'true'
    } catch (error) {
      console.warn('Failed to watermark image:', error)
    }
  })
}

// Export singleton instance - only create in browser environment
export const imageWatermark = typeof window !== 'undefined' ? new ImageWatermark() : null
