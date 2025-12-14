# 🚀 QUICK SETUP GUIDE

## First Steps (Do These Right Away!)

### 1. Update App Store URLs
**File:** `js/config.js`

Replace the empty strings with your actual app store URLs:
```javascript
appStoreUrls: {
    revalidator: {
        android: "YOUR_PLAY_STORE_URL_HERE",
        ios: "YOUR_APP_STORE_URL_HERE"  // When available
    },
    // ... rest of config
}
```

### 2. Set Up Contact Form
**File:** `js/config.js`

Choose ONE method and add your details:

**Option A - FormSubmit (Easiest):**
```javascript
contactForm: {
    formsubmitEmail: "hello@zizwe.it",  // Your email
    formspreeId: "",
    customEndpoint: ""
}
```
Then update `js/main.js` line ~156:
```javascript
const response = await fetch(`https://formsubmit.co/${SITE_CONFIG.contactForm.formsubmitEmail}`, {
```

**Option B - Formspree:**
1. Sign up at formspree.io
2. Create a form and get your ID
3. Add to config:
```javascript
contactForm: {
    formsubmitEmail: "",
    formspreeId: "YOUR_FORMSPREE_ID",  // Add here
    customEndpoint: ""
}
```

### 3. Add Company Number
**File:** `js/config.js`
```javascript
company: {
    companyNumber: "YOUR_COMPANY_NUMBER"  // Add here
}
```

Then update footer in all HTML files (find "Company No:" in footers)

### 4. Test Locally
```bash
# Option 1: VS Code Live Server
# - Install "Live Server" extension
# - Right-click index.html > "Open with Live Server"

# Option 2: Python
python -m http.server 8000
# Visit: http://localhost:8000

# Option 3: Node.js
npx http-server
# Visit: http://localhost:8080
```

### 5. Test Everything
- [ ] All navigation links work
- [ ] Contact form submits (test it!)
- [ ] Mobile menu works
- [ ] All images load
- [ ] Legal pages accessible
- [ ] App store links redirect correctly

## Ready to Deploy?

### Netlify (Recommended)
```bash
# Drag and drop the entire folder to netlify.com
# OR use CLI:
netlify deploy --prod
```

### Vercel
```bash
vercel
```

### GitHub Pages
1. Create GitHub repo
2. Push code
3. Enable Pages in Settings

## Need Help?
- Read full `README.md` for detailed documentation
- Email: hello@zizwe.it

---

**Next Steps After Deployment:**
1. Set up Google Analytics (optional)
2. Submit to Google Search Console
3. Create sitemap.xml
4. Add social media links
5. Consider adding blog section
