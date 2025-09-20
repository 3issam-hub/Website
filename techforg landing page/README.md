# TechForge Landing Page

A modern, responsive landing page for TechForge IT company featuring creative design, interactive animations, and contact form integration.

## Features

- **Hero Section**: Eye-catching hero with floating 3D cards and gradient backgrounds
- **Services Section**: Three main service categories with detailed modals
- **Portfolio Section**: Filterable project showcase
- **About Section**: Animated statistics and company information
- **Contact Section**: Web3Forms integrated contact form
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern UI**: 3D effects, gradients, and interactive elements

## Setup Instructions

### 1. Web3Forms Integration

To enable the contact form functionality, you need to set up Web3Forms:

1. Go to [Web3Forms](https://web3forms.com/)
2. Sign up for a free account
3. Create a new form and get your access key
4. Open `index.html` and find this line:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY">
   ```
5. Replace `YOUR_WEB3FORMS_KEY` with your actual access key

### 2. Customization

#### Company Information
Update the following in `index.html`:
- Company name: Search for "TechForge" and replace with your company name
- Contact information in the contact section
- Social media links
- Company description and tagline

#### Images
The landing page uses Unsplash images. To use your own images:
1. Replace the image URLs in the HTML with your own image paths
2. Recommended image sizes:
   - Service images: 500x300px
   - Portfolio images: 400x300px
   - Hero background: 1920x1080px

#### Colors and Styling
Main color scheme can be modified in `styles.css`:
- Primary color: `#6366f1` (indigo)
- Secondary color: `#ff6b6b` (coral)
- Background gradients can be adjusted in the hero and about sections

### 3. File Structure

```
techforg-landing-page/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

### 4. Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Features Breakdown

### Navigation
- Fixed header with smooth scrolling
- Mobile hamburger menu
- Logo and navigation links

### Hero Section
- Animated floating cards
- Gradient background with rotating orbs
- Call-to-action buttons
- Responsive design

### Services Section
- Three service categories with images
- Interactive modals with detailed information
- Hover effects and animations
- "Learn More" buttons that open detailed modals

### Portfolio Section
- Filterable project grid
- Hover overlays with project information
- Smooth animations and transitions

### About Section
- Animated counter statistics
- Company information
- Gradient background
- Responsive grid layout

### Contact Section
- Web3Forms integrated contact form
- Contact information display
- Social media links
- Form validation and success notifications

### Footer
- Company logo and tagline
- Navigation menu
- Copyright information

## Customization Tips

1. **Images**: Use high-quality, professional images that represent your services
2. **Content**: Update all text content to match your company's voice and services
3. **Colors**: Choose colors that match your brand identity
4. **Animations**: Adjust animation speeds and effects in the CSS file
5. **Contact Info**: Update phone numbers, email addresses, and location

## Technical Notes

- Uses modern CSS Grid and Flexbox for layouts
- CSS animations and transitions for smooth interactions
- JavaScript for form handling and interactive features
- Mobile-first responsive design
- Optimized for performance and accessibility

## Support

For any issues or questions about customizing this landing page, please refer to the code comments or contact the development team.

---

**TechForge** - Where Design Meets Technology
