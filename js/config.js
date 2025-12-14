// ==================================
// ZIZWE.IT Website Configuration
// ==================================
// Edit this file to customize your website settings

const SITE_CONFIG = {
    // Company Information
    company: {
        name: "ZIZWE IT LIMITED",
        email: "hello@zizwe.it",
        country: "United Kingdom",
        companyNumber: "" // Add your company number
    },

    // App Store URLs
    appStoreUrls: {
        revalidator: {
            android: "https://play.google.com/store/apps/details?id=com.revalidator.app",
            ios: "", // Add when iOS version is available
            support: "support@revalidator.uk"
        },
        orderease: {
            android: "", // Add when available
            ios: ""      // Add when available
        },
        stockease: {
            android: "", // Add when available
            ios: ""      // Add when available
        },
        ezethu: {
            android: "", // Add when available
            ios: ""      // Add when available
        }
    },

    // Social Media Links (optional)
    social: {
        linkedin: "",   // Add your LinkedIn URL
        twitter: "",    // Add your Twitter/X URL
        github: "",     // Add your GitHub URL
        facebook: "",   // Add your Facebook URL
        instagram: ""   // Add your Instagram URL
    },

    // Product Pricing (for easy updates)
    pricing: {
        revalidator: {
            introPrice: "£2",
            monthlyPrice: "£4.99",
            annualPrice: "£45"
        }
    },

    // Analytics (optional)
    analytics: {
        googleAnalyticsId: "", // Add your GA4 Measurement ID (G-XXXXXXXXXX)
        plausibleDomain: ""    // Or use Plausible.io
    },

    // Contact Form
    contactForm: {
        // Choose one:
        formsubmitEmail: "",  // FormSubmit.co - enter your email
        formspreeId: "",      // Formspree - enter your form ID
        customEndpoint: ""    // Your own backend API endpoint
    },

    // Feature Flags
    features: {
        cookieBanner: true,
        analytics: false,      // Set to true when analytics is configured
        chatWidget: false,     // Set to true if adding chat support
        newsletter: false      // Set to true if adding newsletter
    },

    // SEO
    seo: {
        siteUrl: "https://zizwe.it",
        defaultImage: "/images/logo.png",
        twitterHandle: "" // @yourusername
    }
};

// Make configuration available globally
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
}

// For Node.js environments (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
