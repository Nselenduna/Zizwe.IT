# ZIZWE.IT Website - Developer Documentation

## 📁 Project Structure

```
zizwe-website/
├── index.html              # Homepage
├── css/
│   └── main.css           # Main stylesheet (all styling)
├── js/
│   └── main.js            # JavaScript functionality
├── images/
│   ├── logo.png           # Company logo
│   └── founder-photo.jpg  # Founder photo
├── pages/
│   ├── products.html      # Products page
│   ├── about.html         # About page
│   ├── contact.html       # Contact page
│   ├── privacy-policy.html    # Privacy Policy (GDPR compliant)
│   ├── terms-of-service.html  # Terms of Service
│   └── cookie-policy.html     # Cookie Policy
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Opening in VS Code
```bash
cd path/to/zizwe-website
code .
```

### 2. Running Locally
You can run this website in several ways:

**Option A: VS Code Live Server (Recommended)**
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Website opens at `http://127.0.0.1:5500`

**Option B: Python Server**
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Option C: Node.js Server**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Visit: http://localhost:8080
```

## 🎨 Customization Guide

### Updating App Store URLs

In `js/main.js`, find the `redirectToAppStore()` function (around line 155):

```javascript
const appUrls = {
    'revalidator-android': 'YOUR_PLAY_STORE_URL',
    'revalidator-ios': 'YOUR_APP_STORE_URL',  // Add when available
    'orderease-android': '',  // Add when available
    'orderease-ios': '',      // Add when available
    'stockease-android': '',  // Add when available
    'stockease-ios': ''       // Add when available
};
```

**Also update direct links in:**
- `index.html` (line ~87)
- `pages/products.html` (line ~54)

### Updating Colors

All colors are defined in `css/main.css` at the top (CSS Variables):

```css
:root {
    --primary-brown: #5d4e37;    /* Main brown color */
    --primary-blue: #5b8fa3;     /* Main blue color */
    --dark-brown: #3d2f1f;       /* Dark brown */
    --light-blue: #7fb5ca;       /* Light blue */
    /* ... more colors */
}
```

To change the entire color scheme, just update these variables!

### Adding Images

1. Add images to the `images/` folder
2. Reference them in HTML:
   ```html
   <!-- From index.html -->
   <img src="images/your-image.jpg" alt="Description">
   
   <!-- From pages/ folder -->
   <img src="../images/your-image.jpg" alt="Description">
   ```

### Updating Content

**Homepage Hero Text:**
- Edit `index.html` around line 40

**Company Information:**
- Edit `pages/about.html` around line 40

**Product Details:**
- Edit `pages/products.html` for each product section

**Footer (appears on all pages):**
- Update in each HTML file's footer section
- Consider creating a shared footer file in future

## 📧 Setting Up Contact Form

The contact form currently shows a placeholder. To make it functional:

### Option 1: FormSubmit.co (Free, Easy)
```javascript
// In js/main.js, update the submitForm function:
const response = await fetch('https://formsubit.co/YOUR_EMAIL@example.com', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(data)
});
```

### Option 2: Formspree (Free tier available)
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData  // Use FormData directly
});
```

### Option 3: Your Own Backend
If you build a backend API:
```javascript
const response = await fetch('https://api.zizwe.it/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

## 🔒 Legal Pages

All three legal pages are fully functional:
- **Privacy Policy** - GDPR compliant, comprehensive data protection
- **Terms of Service** - Complete legal terms including healthcare disclaimers
- **Cookie Policy** - Detailed cookie usage and user controls

**Important:** Before going live, consider having these reviewed by a solicitor, especially:
- Healthcare disclaimers in Terms of Service
- GDPR compliance in Privacy Policy
- Any jurisdiction-specific requirements

## 🍪 Cookie Banner

The cookie banner is already implemented and works with localStorage:
- Shows on first visit
- Remembers user choice
- Compliant with UK PECR/GDPR

To add Google Analytics or other tracking:
1. Add tracking code in `js/main.js` in the `enableAnalytics()` function
2. Update Cookie Policy with specific cookie details

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoint at 768px. Test on:
- Desktop (1920px, 1366px, 1024px)
- Tablet (768px, 1024px)
- Mobile (375px, 414px, 390px)

Mobile menu automatically appears on small screens.

## 🔍 SEO Optimization

Each page has:
- Meta descriptions
- Open Graph tags (for social media)
- Semantic HTML structure
- Descriptive alt text for images

**To improve SEO:**
1. Add `sitemap.xml` (generate using online tools)
2. Add `robots.txt`
3. Submit to Google Search Console
4. Add structured data (Schema.org markup)

## 🚀 Deployment Options

### Option 1: Netlify (Recommended for beginners)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

Or use drag-and-drop at netlify.com

### Option 2: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 3: GitHub Pages
1. Create GitHub repository
2. Push code
3. Go to Settings > Pages
4. Select branch and root folder
5. Site publishes at `username.github.io/repo-name`

### Option 4: Traditional Hosting
Upload via FTP/SFTP to any web host:
- Upload all files maintaining folder structure
- Ensure `index.html` is in the root
- Set file permissions if needed

## 🔧 Common Edits

### Adding a New Product
1. Add section in `pages/products.html`
2. Add to navigation/footer if needed
3. Add to homepage "Coming Soon" section if applicable

### Changing Pricing
Update in multiple places:
- `index.html` (Featured product section)
- `pages/products.html` (Product details)
- `pages/terms-of-service.html` (Subscription section)

### Adding Blog
Create a `blog/` folder with:
- `blog/index.html` (blog listing)
- `blog/post-name.html` (individual posts)
- Add blog link to navigation

## 🎯 Performance Optimization

### Image Optimization
```bash
# Install imagemagick or use online tools
# Resize founder photo:
convert founder-photo.jpg -resize 600x600 -quality 85 founder-photo.jpg

# Resize logo:
convert logo.png -resize 200x200 logo.png
```

### Minification (Before production)
```bash
# Install minifiers
npm install -g html-minifier clean-css-cli uglify-js

# Minify CSS
cleancss -o css/main.min.css css/main.css

# Minify JS
uglifyjs js/main.js -o js/main.min.js -c -m

# Then update HTML to reference .min files
```

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property at analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `<head>` of each page:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Privacy-Friendly Alternative: Plausible
```html
<script defer data-domain="zizwe.it" src="https://plausible.io/js/script.js"></script>
```

## 🐛 Troubleshooting

### Images not loading
- Check file paths (case-sensitive!)
- Ensure images are in `images/` folder
- Check image file extensions (.jpg vs .jpeg)

### JavaScript not working
- Open browser console (F12)
- Look for errors
- Ensure `main.js` is loading

### CSS not applying
- Hard refresh (Ctrl+Shift+R)
- Check browser DevTools for CSS loading
- Validate CSS syntax

### Mobile menu not working
- Check JavaScript console for errors
- Ensure `main.js` is loaded
- Test on actual mobile device, not just DevTools

## 📝 Future Enhancements

Consider adding:
1. **Blog section** - Share updates and insights
2. **Newsletter signup** - Mailchimp or ConvertKit integration
3. **Testimonials** - Customer reviews and success stories
4. **FAQ page** - Common questions
5. **Product comparison table** - Compare OrderEase vs competitors
6. **Video demos** - YouTube embeds of product walkthroughs
7. **Live chat** - Tawk.to or Intercom integration
8. **Search functionality** - Algolia or simple JS search
9. **Multi-language** - Support for Ndebele (for Ezethu izitori)
10. **Dark mode toggle** - User preference setting

## 🔐 Security Checklist

Before going live:
- [ ] Update all placeholder content
- [ ] Add your actual email to contact form
- [ ] Set up HTTPS (automatic with Netlify/Vercel)
- [ ] Review and customize legal pages
- [ ] Test contact form thoroughly
- [ ] Add Content Security Policy headers
- [ ] Set up proper error pages (404, 500)
- [ ] Enable security headers (on hosting platform)

## 📞 Support

For questions or issues with this codebase:
- **Email:** hello@zizwe.it
- **Documentation:** This README
- **Original Developer:** Claude (Anthropic)

## 📄 License

This website code is proprietary to ZIZWE IT LIMITED.
All rights reserved.

---

**Version:** 1.0.0  
**Last Updated:** December 12, 2024  
**Built by:** Claude for ZIZWE IT LIMITED
