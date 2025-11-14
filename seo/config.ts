// seo/config.ts
export const seoConfig = {
  // Site Identity
  siteName: "Saudi Bizz Directory",
  defaultTitle: "Best Business Listing Directory in Saudi Arabia | Find Top Rated Companies | Saudi Bizz Directory",
  titleTemplate: "%s | Saudi Bizz Directory", 
  defaultDescription: "Search Saudi Arabia's best business listing directory. Saudi Bizz Directory offers verified listings, customer reviews, & contacts for top companies, clinics, & services in KSA. Find trusted businesses fast.",
  siteUrl: "https://www.saudibizzdirectory.com",
  defaultOgImage: "/assets/img/logo/og-default.png",
  twitterHandle: "@saudibizzdirectory",
  defaultAuthor: "Saudi Bizz Directory",
  
  // Localization
  defaultLocale: "en_SA",
  supportedLocales: ["en_SA", "ar_SA"],
  
  // SEO Defaults
  defaultRobots: "index, follow",
  defaultOgType: "website",
  
  // Regional Keywords
  regionalKeywords: [
    "Saudi Arabia business directory",
    "businesses in Riyadh",
    "Jeddah companies",
    "Dammam business listings",
    "Makkah services",
    "Saudi business contacts",
    "KSA directory",
    "Saudi companies",
    "business listings Saudi Arabia",
    "find businesses in Saudi"
  ],
  
  // Analytics
  analytics: {
    googleAnalytics: {
      measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX",
    },
    googleTagManager: {
      containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID,
    },
  },
  
  // Verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
  },
  
  // Social Media
  social: {
    facebook: "https://facebook.com/saudibizzdirectory",
    twitter: "https://twitter.com/saudibizzdirectory",
    instagram: "https://instagram.com/saudibizzdirectory",
    linkedin: "https://linkedin.com/company/saudibizzdirectory",
    tiktok: "https://tiktok.com/@saudibizzdirectory",
    snapchat: "https://snapchat.com/add/saudibizzdirectory",
  },
  
  // Business Information
  business: {
    name: "Saudi Bizz Directory",
    legalName: "Saudi Bizz Directory",
    description: "Saudi Arabia's premier business directory connecting customers with trusted businesses across all 13 regions",
    address: {
      streetAddress: "",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Region",
      postalCode: "",
      addressCountry: "SA"
    },
    contactPoint: {
      telephone: "+966-XX-XXX-XXXX",
      contactType: "customer support",
      availableLanguage: ["English", "Arabic"]
    }
  },
  
  // Geographic Coverage
  geographicCoverage: {
    country: "Saudi Arabia",
    countryCode: "SA",
    regions: [
      "Riyadh Region",
      "Makkah Region", 
      "Madinah Region",
      "Eastern Province",
      "Asir Region",
      "Qassim Region",
      "Ha'il Region",
      "Tabuk Region",
      "Northern Borders",
      "Jazan Region",
      "Najran Region",
      "Al-Bahah Region",
      "Al-Jawf Region"
    ],
    majorCities: [
      "Riyadh",
      "Jeddah",
      "Makkah",
      "Madinah",
      "Dammam",
      "Khobar",
      "Dhahran",
      "Taif",
      "Tabuk",
      "Buraidah",
      "Jubail",
      "Abha",
      "Najran",
      "Jazan"
    ]
  }
};

export type SEOConfig = typeof seoConfig;