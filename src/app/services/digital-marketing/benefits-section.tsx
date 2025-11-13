// src/app/services/digital-marketing/benefits-section.tsx
'use client'

import React from 'react'

interface Benefit {
  icon: string
  title: string
  description: string
}

interface BenefitsSectionProps {
  benefits: Benefit[]
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <div className="row g-4">
      {benefits.map((benefit, index) => (
        <div key={index} className="col-xl-3 col-lg-6 col-md-6">
          <div 
            className="card border-0 rounded-4 p-4 h-100 shadow-sm benefit-card"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 104, 53, 0.05) 0%, rgba(20, 104, 53, 0.02) 100%)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(20, 104, 53, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <div className="mb-3">
              <span style={{ fontSize: '2rem' }}>{benefit.icon}</span>
            </div>
            <h5 className="fw-bold mb-3 text-primary">{benefit.title}</h5>
            <p className="mb-0 text-muted">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}