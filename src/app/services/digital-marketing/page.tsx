// src/app/services/digital-marketing/page.tsx
import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateSEOMetadata } from '../../../../lib/useSeo';
import { MdArrowForwardIos } from 'react-icons/md'
import { 
  BsGlobe, 
  BsSearch, 
  BsMegaphone, 
  BsGraphUp,
} from 'react-icons/bs'

import NavbarServerWrapper from '@/app/components/navbar/navabar-server'
import FooterTop from '@/app/components/footer-top'
import Footer from '@/app/components/footer/footer'
import BackToTop from '@/app/components/back-to-top'
import ContactForm from './contact-form'
import BenefitsSection from './benefits-section' // 🔥 Import Client Component

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata('/services/digital-marketing')
}

// Services data
const services = [
  {
    icon: BsGlobe,
    title: 'Online Directory Listing',
    description: 'Get your business listed on Saudi Arabia\'s premier online directory. Increase visibility and reach thousands of potential customers across all 13 regions.',
    features: [
      'Verified business profile',
      'Complete business information',
      'Photos and gallery',
      'Location mapping',
      'Customer reviews',
      'Direct contact details'
    ]
  },
  {
    icon: BsSearch,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and get found by customers searching for your services online across Saudi Arabia.',
    features: [
      'Keyword research & strategy',
      'On-page SEO optimization',
      'Local SEO for Saudi market',
      'Google My Business setup',
      'Monthly performance reports',
      'Competitor analysis'
    ]
  },
  {
    icon: BsMegaphone,
    title: 'Social Media Marketing',
    description: 'Build your brand presence across Instagram, Twitter/X, Snapchat, and TikTok with engaging content and targeted campaigns.',
    features: [
      'Social media strategy',
      'Arabic & English content creation',
      'Community management',
      'Paid social advertising',
      'Influencer partnerships',
      'Analytics & reporting'
    ]
  },
  {
    icon: BsGraphUp,
    title: 'Digital Advertising',
    description: 'Run targeted advertising campaigns to reach your ideal customers across Saudi Arabia and drive conversions.',
    features: [
      'Google Ads management',
      'Social media ads (Instagram, Snapchat, TikTok)',
      'Display advertising',
      'Retargeting campaigns',
      'A/B testing',
      'ROI optimization'
    ]
  }
]

// Why choose us points - Premium positioning
const benefits = [
  {
    icon: '🎯',
    title: 'Strategic Excellence',
    description: 'Industry-leading strategists who craft data-driven campaigns that deliver measurable business impact across the Kingdom'
  },
  {
    icon: '📊',
    title: 'Performance Focused',
    description: 'Advanced analytics and continuous optimization ensure every marketing riyal drives maximum ROI and competitive advantage'
  },
  {
    icon: '🌐',
    title: 'Bilingual Mastery',
    description: 'Expert content creation in both Arabic and English to effectively engage all audiences across Saudi Arabia'
  },
  {
    icon: '🤝',
    title: 'White-Glove Service',
    description: 'Dedicated senior consultants provide personalized attention, transparent reporting, and proactive strategic guidance'
  }
]

export default function DigitalMarketingPage() {
  return (
    <>
      <NavbarServerWrapper />

      {/* Hero Section */}
      <section 
        className="bg-cover position-relative" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
        data-overlay="6"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-8 col-lg-10 col-md-12">
              <div className="position-relative text-center mb-5 pt-5 pt-lg-0">
                <span className="badge badge-light text-primary px-3 py-2 rounded-pill mb-3">
                  Premium Digital Marketing
                </span>
                <h1 className="text-light xl-heading mb-3">
                  Elevate Your Business with Strategic Digital Marketing
                </h1>
                <p className="text-light fs-5 mb-4">
                  Expert-driven campaigns that deliver measurable results and sustainable growth across Saudi Arabia
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
                  <a 
                    href="#contact-form" 
                    className="btn btn-lg btn-primary rounded-pill px-5"
                  >
                    Get Started
                  </a>
                  <a 
                    href="#services" 
                    className="btn btn-lg btn-outline-light rounded-pill px-5"
                  >
                    View Services
                  </a>
                </div>
                <nav id="breadcrumbs" className="breadcrumbs light">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <MdArrowForwardIos className='ms-2' />
                    <li><Link href="#">Services</Link></li>
                    <MdArrowForwardIos className='ms-2' />
                    <li>Digital Marketing</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="text-center mb-5">
                <span className="badge badge-success rounded-pill mb-3">Premium Services</span>
                <h2 className="mb-3">
                  Saudi Arabia's Leading Digital Marketing Agency
                </h2>
                <p className="fs-6 text-muted mb-4">
                  We combine strategic thinking, creative excellence, and advanced technology to help 
                  ambitious businesses dominate their markets. From Riyadh to Jeddah, Dammam to Makkah, 
                  our proven methodologies and expert team deliver exceptional results that drive real business growth 
                  across all 13 regions of the Kingdom.
                </p>
                <div className="d-flex gap-4 justify-content-center align-items-center flex-wrap">
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      ✓
                    </div>
                    <span className="fw-medium">Industry Experts</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      ✓
                    </div>
                    <span className="fw-medium">Proven Track Record</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      ✓
                    </div>
                    <span className="fw-medium">Results Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-light py-5" id="services">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-xl-8 text-center">
              <h2 className="mb-3">Our Services</h2>
              <p className="text-muted">Comprehensive digital solutions tailored for the Saudi market</p>
            </div>
          </div>
          <div className="row g-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="col-xl-6 col-lg-6 col-md-12">
                  <div className="card border-0 rounded-4 p-4 h-100 shadow-sm">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                        style={{
                          width: '60px',
                          height: '60px',
                          backgroundColor: 'var(--bs-primary-bg-subtle)',
                          color: 'var(--bs-primary)'
                        }}
                      >
                        <Icon size={28} />
                      </div>
                      <div>
                        <h4 className="fw-medium mb-2">{service.title}</h4>
                        <p className="text-muted mb-3">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <h6 className="fw-medium mb-3">What's Included:</h6>
                      <ul className="list-unstyled">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="mb-2 d-flex align-items-start">
                            <span className="text-primary me-2">✓</span>
                            <span className="text-muted">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-xl-8 col-lg-9 text-center">
              <span className="badge badge-primary rounded-pill mb-3">Why Saudi Bizz</span>
              <h2 className="mb-3">Premium Digital Marketing That Delivers Results</h2>
              <p className="text-muted fs-6">
                We're not just another marketing agency – we're your strategic growth partner, 
                committed to delivering exceptional results through expertise, innovation, and dedication.
              </p>
            </div>
          </div>

          {/* 🔥 USE CLIENT COMPONENT FOR INTERACTIVE BENEFITS */}
          <BenefitsSection benefits={benefits} />

          {/* Add Stats Section */}
          <div className="row mt-5 pt-5 border-top">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">500+</h3>
                <p className="text-muted mb-0">Successful Campaigns</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">95%</h3>
                <p className="text-muted mb-0">Client Satisfaction</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">3x</h3>
                <p className="text-muted mb-0">Average ROI Growth</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <h3 className="display-4 fw-bold text-primary mb-2">24/7</h3>
                <p className="text-muted mb-0">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Alignment */}
      <section className="bg-light-primary py-4">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="mb-2 fw-semibold text-primary">Supporting Saudi Vision 2030</p>
              <p className="mb-0 text-muted small">
                Empowering Saudi businesses with cutting-edge digital solutions to contribute to the Kingdom's economic transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <FooterTop />
      <Footer />
      <BackToTop />
    </>
  )
}