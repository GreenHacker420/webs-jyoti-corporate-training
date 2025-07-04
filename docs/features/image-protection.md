# Image Protection System

## 🛡️ Overview

The Webs Jyoti platform includes a comprehensive image protection system designed to prevent unauthorized use of website images and maintain brand integrity. This system combines watermarking, access control, and user behavior monitoring to protect visual content.

## 🔧 Features

### Automatic Watermarking
- **Tiled Watermarks**: Semi-transparent company logo repeated across images
- **Dynamic Application**: Watermarks applied in real-time using Canvas API
- **Customizable Options**: Text, opacity, size, and positioning can be configured
- **Brand Consistency**: Uses company branding and colors

### Access Control
- **Right-click Protection**: Disabled context menus on images
- **Drag Prevention**: Blocked drag-and-drop functionality
- **Selection Blocking**: Prevented text/image selection
- **Print Protection**: Disabled printing of protected content

### Keyboard Shortcuts
Blocked shortcuts include:
- **Ctrl+S**: Save page/image
- **Ctrl+P**: Print page
- **F12**: Developer tools
- **Ctrl+Shift+I**: Inspect element
- **Ctrl+Shift+C**: Element selector
- **Ctrl+U**: View page source

### User Notifications
- **Custom Alerts**: Branded notification messages
- **Non-intrusive**: Temporary notifications that auto-dismiss
- **Educational**: Inform users about protection measures
- **Professional**: Maintains brand image while protecting content

## 🏗️ Technical Implementation

### Canvas-based Watermarking
```typescript
class ImageWatermark {
  async applyTiledWatermark(imageUrl: string, options: WatermarkOptions): Promise<string> {
    // Load original image
    const img = new Image()
    img.crossOrigin = 'anonymous'
    
    // Create canvas and apply watermark
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    // Draw original image
    ctx.drawImage(img, 0, 0)
    
    // Apply tiled watermark pattern
    const tileSpacing = 150
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Draw watermark at each position
        ctx.fillText(watermarkText, x, y)
      }
    }
    
    return canvas.toDataURL('image/png', 0.9)
  }
}
```

### Protection Event Handlers
```typescript
// Prevent right-click context menu
document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault()
    showProtectionNotice()
  }
})

// Prevent drag and drop
document.addEventListener('dragstart', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault()
    showProtectionNotice()
  }
})

// Block keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (isProtectedShortcut(e)) {
    e.preventDefault()
    showProtectionNotice()
  }
})
```

### CSS Protection
```css
img {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  user-drag: none;
  pointer-events: auto;
}

img::selection {
  background: transparent;
}
```

## 🎨 Watermark Customization

### Configuration Options
```typescript
interface WatermarkOptions {
  text?: string              // Watermark text (default: 'Webs Jyoti')
  logoUrl?: string          // Company logo URL
  opacity?: number          // Transparency (0.1 - 1.0)
  position?: string         // 'center' | 'tiled' | 'corner'
  fontSize?: number         // Text size in pixels
  fontFamily?: string       // Font family
  color?: string           // Text color (hex/rgb)
  rotation?: number        // Rotation angle in degrees
}
```

### Usage Examples
```typescript
// Basic watermark
const watermarked = await imageWatermark.applyWatermark(imageUrl, {
  text: 'Webs Jyoti',
  opacity: 0.3
})

// Tiled pattern
const tiled = await imageWatermark.applyTiledWatermark(imageUrl, {
  text: 'CONFIDENTIAL',
  opacity: 0.1,
  fontSize: 16,
  rotation: -45
})

// Custom branding
const branded = await imageWatermark.applyWatermark(imageUrl, {
  logoUrl: '/logos/company-logo.png',
  text: 'Property of Webs Jyoti',
  position: 'bottom-right',
  opacity: 0.5
})
```

## 🔒 Security Levels

### Level 1: Basic Protection
- Right-click disabled on images
- Drag-and-drop prevention
- Basic keyboard shortcuts blocked
- Suitable for: General website images

### Level 2: Enhanced Protection
- All Level 1 features
- Watermark overlay applied
- Print protection enabled
- Developer tools access restricted
- Suitable for: Training materials, presentations

### Level 3: Maximum Protection
- All Level 2 features
- Tiled watermark patterns
- Screenshot detection (where possible)
- Advanced keyboard shortcut blocking
- Suitable for: Proprietary content, copyrighted materials

## 📱 Cross-Platform Compatibility

### Desktop Browsers
- **Chrome**: Full protection support
- **Firefox**: Full protection support
- **Safari**: Full protection support
- **Edge**: Full protection support

### Mobile Devices
- **iOS Safari**: Limited protection (no right-click)
- **Android Chrome**: Partial protection
- **Mobile Firefox**: Partial protection

### Limitations
- **Mobile**: Some protection features unavailable due to platform restrictions
- **Older Browsers**: Reduced functionality on legacy browsers
- **Accessibility**: Some features may conflict with screen readers

## 🛠️ Implementation Guide

### Basic Setup
```typescript
// 1. Import protection utilities
import { initializeImageProtection, WatermarkedImage } from '@/lib/watermark'

// 2. Initialize protection on app load
useEffect(() => {
  initializeImageProtection()
}, [])

// 3. Use protected image component
<WatermarkedImage
  src="/images/training-session.jpg"
  alt="Training Session"
  watermarkText="Webs Jyoti"
  enableProtection={true}
/>
```

### Advanced Configuration
```typescript
// Custom protection provider
export function ImageProtectionProvider({ children }) {
  useEffect(() => {
    // Initialize with custom settings
    initializeImageProtection({
      watermarkText: 'Your Company',
      protectionLevel: 'maximum',
      customNotifications: true
    })
  }, [])

  return <>{children}</>
}
```

### Gallery Protection
```typescript
// Protected image gallery
<ProtectedGallery
  images={[
    { src: '/image1.jpg', alt: 'Image 1', caption: 'Training Session' },
    { src: '/image2.jpg', alt: 'Image 2', caption: 'Workshop' }
  ]}
  watermarkText="Webs Jyoti"
  watermarkOpacity={0.2}
/>
```

## 📊 Analytics and Monitoring

### Protection Events
The system tracks various protection events:
- Right-click attempts on images
- Drag-and-drop attempts
- Blocked keyboard shortcuts
- Print attempts
- Developer tools access attempts

### Usage Statistics
```typescript
// Example analytics data
{
  protectionEvents: {
    rightClickBlocked: 45,
    dragDropBlocked: 23,
    shortcutsBlocked: 67,
    printBlocked: 12
  },
  watermarksApplied: 234,
  imagesProtected: 156
}
```

## 🔧 Troubleshooting

### Common Issues

#### Watermarks Not Appearing
- **Cause**: CORS issues with external images
- **Solution**: Ensure images are served from same domain or configure CORS

#### Protection Not Working
- **Cause**: JavaScript disabled or blocked
- **Solution**: Provide fallback protection via CSS and server-side measures

#### Performance Issues
- **Cause**: Large images or too many watermarks
- **Solution**: Optimize images and implement lazy loading

#### Mobile Compatibility
- **Cause**: Limited mobile browser capabilities
- **Solution**: Implement progressive enhancement

### Debug Mode
```typescript
// Enable debug logging
const watermark = new ImageWatermark({ debug: true })

// Check protection status
console.log('Protection active:', isProtectionActive())

// Monitor events
document.addEventListener('protectionEvent', (e) => {
  console.log('Protection triggered:', e.detail)
})
```

## 🚀 Best Practices

### Performance Optimization
- **Lazy Loading**: Apply watermarks only when images are visible
- **Caching**: Cache watermarked images to avoid reprocessing
- **Compression**: Optimize watermarked images for web delivery
- **Progressive Enhancement**: Provide basic protection even without JavaScript

### User Experience
- **Non-intrusive**: Don't interfere with legitimate user interactions
- **Clear Messaging**: Explain protection measures when appropriate
- **Accessibility**: Ensure protection doesn't break screen readers
- **Graceful Degradation**: Provide fallbacks for unsupported browsers

### Security Considerations
- **Server-side Validation**: Don't rely solely on client-side protection
- **Regular Updates**: Keep protection measures current with browser changes
- **Monitoring**: Track protection bypass attempts
- **Legal Notices**: Include appropriate copyright and usage notices

## 📋 Configuration Reference

### Environment Variables
```bash
# Image protection settings
WATERMARK_DEFAULT_TEXT="Webs Jyoti"
WATERMARK_DEFAULT_OPACITY=0.3
PROTECTION_LEVEL="enhanced"
ENABLE_ANALYTICS=true
```

### Component Props
```typescript
interface WatermarkedImageProps {
  src: string                    // Image source URL
  alt: string                   // Alt text for accessibility
  watermarkText?: string        // Custom watermark text
  watermarkOpacity?: number     // Opacity (0-1)
  enableProtection?: boolean    // Enable/disable protection
  protectionLevel?: string      // 'basic' | 'enhanced' | 'maximum'
  onProtectionEvent?: Function  // Event handler for protection triggers
}
```

## 📞 Support

For issues related to image protection:
- **Technical Problems**: Check browser console for errors
- **Configuration Help**: Refer to implementation examples
- **Performance Issues**: Review optimization guidelines
- **Security Concerns**: Contact development team

---

**Last Updated**: January 2024  
**Version**: 1.0.0
