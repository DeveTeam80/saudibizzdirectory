/**
 * AI Agent Meta Tags Component
 * 
 * This component adds AI agent specific meta tags to improve discoverability
 * in AI search engines like ChatGPT, Claude, Gemini, and Perplexity.
 * Optimized for Saudi Arabia market.
 */

interface AIAgentMetaProps {
  intent?: string;
  entities?: string[];
  topics?: string[];
  questionAnswer?: Array<{ question: string; answer: string }>;
  conversationalHooks?: string[];
}

export default function AIAgentMeta({
  intent,
  entities,
  topics,
  questionAnswer,
  conversationalHooks
}: AIAgentMetaProps) {
  return (
    <>
      {/* AI Agent Intent */}
      {intent && (
        <meta name="ai-agent-intent" content={intent} />
      )}
      
      {/* AI Agent Entities */}
      {entities && entities.length > 0 && (
        <meta name="ai-agent-entities" content={entities.join(',')} />
      )}
      
      {/* AI Agent Topics */}
      {topics && topics.length > 0 && (
        <meta name="ai-agent-topics" content={topics.join(',')} />
      )}
      
      {/* AI Agent Conversational Hooks */}
      {conversationalHooks && conversationalHooks.length > 0 && (
        <meta name="ai-agent-conversational-hooks" content={conversationalHooks.join('|')} />
      )}
      
      {/* AI Agent Q&A Schema */}
      {questionAnswer && questionAnswer.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: questionAnswer.map(qa => ({
                '@type': 'Question',
                name: qa.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: qa.answer
                }
              }))
            })
          }}
        />
      )}
      
      {/* Geographic and Language Meta Tags */}
      <meta name="content-language" content="en-SA, ar-SA" />
      <meta name="geo.region" content="SA" />
      <meta name="geo.placename" content="Saudi Arabia" />
      <meta name="geo.country" content="SA" />
      <meta name="geo.position" content="24.7136;46.6753" /> {/* Riyadh coordinates */}
      <meta name="ICBM" content="24.7136, 46.6753" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 day" />
      
      {/* Saudi Arabia Specific Meta Tags */}
      <meta name="coverage" content="Saudi Arabia" />
      <meta name="target-market" content="Saudi Arabia" />
      <meta name="audience" content="Saudi businesses, Saudi consumers" />
      <meta name="market" content="SA" />
      
      {/* AI Agent Search Action */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Saudi Bizz Directory',
            alternateName: 'SaudiBizz',
            url: 'https://www.saudibizzdirectory.com',
            description: 'Find trusted businesses across Saudi Arabia. Comprehensive business directory covering all 13 regions from Riyadh to Jeddah.',
            inLanguage: ['en-SA', 'ar-SA'],
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
            },
            about: {
              '@type': 'Thing',
              name: 'Business Directory',
              sameAs: 'https://en.wikipedia.org/wiki/Business_directory'
            }
          })
        }}
      />
      
      {/* Additional Structured Data for AI Agents */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Saudi Bizz Directory',
            url: 'https://www.saudibizzdirectory.com',
            logo: 'https://www.saudibizzdirectory.com/assets/img/logo/logoa.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+966-XX-XXX-XXXX',
              contactType: 'customer service',
              availableLanguage: ['English', 'Arabic'],
              areaServed: 'SA'
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Riyadh',
              addressRegion: 'Riyadh Region',
              addressCountry: 'SA'
            },
            sameAs: [
              'https://www.facebook.com/profile.php?id=61583309053755',
              'https://www.instagram.com/saudibizzdirectory',
              'https://twitter.com/saudibizzdirectory',
              'https://www.linkedin.com/company/saudibizzdirectory'
            ],
            knowsAbout: [
              'Business listings in Saudi Arabia',
              'Saudi companies directory',
              'Riyadh businesses',
              'Jeddah businesses',
              'Dammam businesses',
              'Makkah businesses',
              'Madinah businesses',
              'Saudi Vision 2030',
              'Saudi business ecosystem'
            ]
          })
        }}
      />
      
      {/* AI Agent Regional Context */}
      <meta name="ai-regional-context" content="Saudi Arabia, Middle East, Gulf Cooperation Council, GCC" />
      <meta name="ai-business-coverage" content="13 regions, Riyadh, Makkah, Madinah, Eastern Province, Asir, Qassim, Hail, Tabuk, Northern Borders, Jazan, Najran, Bahah, Jawf" />
      <meta name="ai-industries" content="Real Estate, Construction, Retail, Healthcare, Hospitality, Technology, Manufacturing, Professional Services" />
      <meta name="ai-languages" content="English, Arabic" />
      <meta name="ai-currency" content="SAR" />
      <meta name="ai-timezone" content="Asia/Riyadh" />
    </>
  );
}