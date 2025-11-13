/**
 * AI Agent Optimization Configuration - SAUDI ARABIA
 * 
 * This file contains configuration for optimizing content for AI search engines
 * like ChatGPT, Claude, Gemini, and Perplexity.
 * Optimized for Saudi Arabia market.
 */

export interface AIAgentConfig {
  // Primary intent keywords that AI agents should understand
  primaryIntents: string[];
  
  // Entity recognition patterns
  entityPatterns: {
    businessTypes: string[];
    locations: string[];
    services: string[];
    industries: string[];
  };
  
  // Conversational hooks for better AI understanding
  conversationalHooks: {
    greetings: string[];
    questions: string[];
    callsToAction: string[];
  };
  
  // Knowledge graph optimization
  knowledgeGraph: {
    mainTopics: string[];
    relatedTopics: string[];
    semanticKeywords: string[];
  };
  
  // AI agent specific meta tags
  metaTags: {
    contentLanguage: string;
    geoRegion: string;
    geoCountry: string;
    distribution: string;
    rating: string;
    revisitAfter: string;
  };
}

export const aiAgentConfig: AIAgentConfig = {
  primaryIntents: [
    'find business',
    'search directory',
    'locate service',
    'contact company',
    'business information',
    'service provider',
    'local business',
    'Saudi business',
    'Saudi Arabia company',
    'KSA directory'
  ],
  
  entityPatterns: {
    businessTypes: [
      'restaurant', 'hotel', 'clinic', 'hospital', 'school', 'bank', 'shop', 'office',
      'factory', 'warehouse', 'salon', 'gym', 'pharmacy', 'garage', 'mall',
      'law firm', 'accounting firm', 'real estate', 'insurance', 'construction',
      'engineering', 'consulting', 'retail store', 'supermarket', 'café'
    ],
    locations: [
      // Major Cities
      'Riyadh', 'Jeddah', 'Makkah', 'Mecca', 'Madinah', 'Medina',
      'Dammam', 'Khobar', 'Al-Khobar', 'Dhahran', 'Taif', 'Tabuk',
      'Buraidah', 'Jubail', 'Al-Jubail', 'Hail', "Ha'il", 'Hafr Al-Batin',
      'Khamis Mushait', 'Najran', 'Jazan', 'Jizan', 'Yanbu', 'Abha',
      'Al-Ahsa', 'Hofuf', 'Al-Hofuf', 'Qatif', 'Al-Qatif', 'Al-Ula',
      // Regions
      'Riyadh Region', 'Makkah Region', 'Madinah Region', 'Eastern Province',
      'Asir Region', 'Qassim Region', "Ha'il Region", 'Tabuk Region',
      'Northern Borders', 'Jazan Region', 'Najran Region', 'Al-Bahah Region', 'Al-Jawf Region'
    ],
    services: [
      'consulting', 'repair', 'maintenance', 'delivery', 'installation',
      'training', 'cleaning', 'security', 'transport', 'catering',
      'photography', 'design', 'marketing', 'legal', 'financial',
      'accounting', 'auditing', 'engineering', 'construction', 'renovation',
      'IT services', 'software development', 'web design', 'translation',
      'visa services', 'logistics', 'freight', 'real estate services'
    ],
    industries: [
      'healthcare', 'education', 'technology', 'manufacturing', 'retail',
      'hospitality', 'construction', 'real estate', 'finance', 'transport',
      'oil and gas', 'petrochemicals', 'telecommunications', 'tourism',
      'food and beverage', 'automotive', 'pharmaceuticals', 'banking',
      'insurance', 'logistics', 'entertainment', 'media'
    ]
  },
  
  conversationalHooks: {
    greetings: [
      'Looking for a business in Saudi Arabia?',
      'Need to find a service provider in the Kingdom?',
      'Searching for local businesses in Saudi?',
      'Want to connect with companies in KSA?',
      'Find businesses across all 13 regions'
    ],
    questions: [
      'What type of business are you looking for?',
      'Which city or region interests you?',
      'What services do you need in Saudi Arabia?',
      'Are you looking for verified businesses in KSA?',
      'Need businesses in Riyadh, Jeddah, or other cities?',
      'Looking for Arabic or English-speaking services?'
    ],
    callsToAction: [
      'Browse our Saudi directory now',
      'Find verified businesses in Saudi Arabia',
      'Connect with local Saudi companies',
      'Discover services across the Kingdom',
      'Explore businesses in your region',
      'List your business for free'
    ]
  },
  
  knowledgeGraph: {
    mainTopics: [
      'Saudi Arabia business directory',
      'KSA business listings',
      'Saudi local businesses',
      'Kingdom service providers',
      'Saudi company listings',
      'business information Saudi Arabia',
      'contact details Saudi businesses',
      'location services KSA',
      'Saudi Vision 2030 companies'
    ],
    relatedTopics: [
      'Gulf business',
      'GCC companies',
      'Middle East business',
      'Arab business directory',
      'business networking Saudi',
      'professional services KSA',
      'commercial directory Saudi Arabia',
      'business verification',
      'Saudi economy',
      'Vision 2030 initiatives',
      'Saudi digital transformation'
    ],
    semanticKeywords: [
      'business directory Saudi Arabia',
      'company listings Riyadh',
      'service providers Jeddah',
      'local businesses Dammam',
      'verified companies Saudi Arabia',
      'business contacts KSA',
      'professional services directory Saudi',
      'businesses in Makkah',
      'Madinah companies',
      'Eastern Province businesses',
      'Saudi business ecosystem',
      'find businesses in Saudi',
      'KSA business search'
    ]
  },
  
  metaTags: {
    contentLanguage: 'en-SA, ar-SA',
    geoRegion: 'SA',
    geoCountry: 'SA',
    distribution: 'global',
    rating: 'general',
    revisitAfter: '1 day'
  }
};

/**
 * Generates AI agent optimized content based on business data
 */
export function generateAIAgentContent(
  businessName: string,
  category: string,
  location: string,
  description: string,
  type: 'listing' | 'category' | 'location' = 'listing'
) {
  const config = aiAgentConfig;
  
  // Generate intent based on type
  let intent = '';
  switch (type) {
    case 'listing':
      intent = `Find information about ${businessName}, a ${category} business in ${location}, Saudi Arabia`;
      break;
    case 'category':
      intent = `Find ${category} businesses and services in Saudi Arabia`;
      break;
    case 'location':
      intent = `Find businesses and services in ${location}, Saudi Arabia`;
      break;
  }
  
  // Generate entities
  const entities = [
    businessName,
    category,
    location,
    'Saudi Arabia',
    'KSA',
    'business directory',
    ...config.entityPatterns.businessTypes.filter(bt => 
      category.toLowerCase().includes(bt.toLowerCase())
    ),
    ...config.entityPatterns.locations.filter(loc => 
      location.toLowerCase().includes(loc.toLowerCase())
    )
  ];
  
  // Generate topics
  const topics = [
    category.toLowerCase(),
    'business services',
    'local directory',
    'Saudi business',
    'KSA business',
    'Saudi Arabia services',
    ...config.knowledgeGraph.mainTopics,
    ...config.knowledgeGraph.semanticKeywords.filter(keyword =>
      keyword.toLowerCase().includes(category.toLowerCase()) ||
      keyword.toLowerCase().includes(location.toLowerCase())
    )
  ];
  
  // Generate conversational hooks
  const conversationalHooks = [
    ...config.conversationalHooks.greetings,
    `Looking for ${category} in ${location}?`,
    `Find the best ${category} services in Saudi Arabia`,
    `Connect with ${businessName}`,
    `Discover ${category} businesses in the Kingdom`
  ];
  
  // Generate Q&A pairs
  const questionAnswer = [
    {
      question: `What is ${businessName}?`,
      answer: `${businessName} is a ${category} business located in ${location}, Saudi Arabia. ${description.substring(0, 200)}...`
    },
    {
      question: `Where is ${businessName} located?`,
      answer: `${businessName} is located in ${location}, Saudi Arabia. You can find their exact address and contact details on our directory.`
    },
    {
      question: `What services does ${businessName} offer?`,
      answer: `${businessName} offers ${category} services in ${location}. For detailed information about their services, contact them directly through our directory.`
    },
    {
      question: `How can I contact ${businessName}?`,
      answer: `You can find ${businessName}'s phone number, email, and location details on Saudi Bizz Directory. Visit their profile for complete contact information.`
    },
    {
      question: `Is ${businessName} a verified business?`,
      answer: `${businessName} is listed on Saudi Bizz Directory. Check their profile for verification status and customer reviews.`
    }
  ];
  
  return {
    intent,
    entities: [...new Set(entities)],
    topics: [...new Set(topics)],
    questionAnswer,
    conversationalHooks: [...new Set(conversationalHooks)]
  };
}

/**
 * Generates AI agent optimized schema markup
 */
export function generateAIAgentSchema(
  businessName: string,
  category: string,
  location: string,
  description: string,
  type: 'listing' | 'category' | 'location' = 'listing'
) {
  const content = generateAIAgentContent(businessName, category, location, description, type);
  
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: businessName,
      description: description,
      inLanguage: ['en-SA', 'ar-SA'],
      about: {
        '@type': 'Thing',
        name: category,
        description: `${category} services in ${location}, Saudi Arabia`
      },
      mainEntity: {
        '@type': 'Organization',
        name: businessName,
        address: {
          '@type': 'PostalAddress',
          addressLocality: location,
          addressRegion: location.includes('Region') ? location : undefined,
          addressCountry: 'SA'
        },
        areaServed: {
          '@type': 'Country',
          name: 'Saudi Arabia'
        },
        knowsAbout: content.topics,
        sameAs: content.entities
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.saudibizzdirectory.com/listings?q={search_term_string}',
          actionPlatform: [
            'https://schema.org/DesktopWebPlatform',
            'https://schema.org/MobileWebPlatform',
            'https://schema.org/IOSPlatform',
            'https://schema.org/AndroidPlatform'
          ]
        },
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: content.questionAnswer.map(qa => ({
        '@type': 'Question',
        name: qa.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: qa.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${category} in ${location}`,
      description: `Directory of ${category} businesses in ${location}, Saudi Arabia`,
      itemListElement: content.entities.slice(0, 10).map((entity, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: entity,
        item: {
          '@type': 'Thing',
          name: entity,
          description: `${entity} related to ${category} in ${location}, Saudi Arabia`
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.saudibizzdirectory.com/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: category,
          item: `https://www.saudibizzdirectory.com/listings/${category.toLowerCase().replace(/\s+/g, '-')}`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: businessName,
          item: `https://www.saudibizzdirectory.com/listings/${category.toLowerCase().replace(/\s+/g, '-')}/${businessName.toLowerCase().replace(/\s+/g, '-')}`
        }
      ]
    }
  ];
}