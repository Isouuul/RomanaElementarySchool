import React from 'react'
import OpcrfLanding from '../../OpcrfLanding'
import dpiBackground from '../../../assets/Leadership/DepEd.png'

const policyHighlights = [
  {
    title: 'Department Orders',
    text: 'Official DepEd orders, policy guidelines, and standard operating procedures.',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Memoranda & Circulars',
    text: 'Division and regional directives, updates, and instructional announcements.',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: 'Compliance Standards',
    text: 'Frameworks and legal mandates ensuring school governance aligns with national standards.',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Implementation Reports',
    text: 'Documentation on the application and monitoring of official DepEd policies.',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

const memorandaLinks = [
  {
    year: '2025',
    title: '2025 SDOVC Memoranda',
    subtitle: 'Access 2025 division files on Google Drive',
    url: 'https://drive.google.com/drive/folders/1Uk5NuifWrvTL-xq-rtuddrLhUQHu51w0?usp=drive_link',
  },
  {
    year: '2026',
    title: '2026 SDOVC Memoranda',
    subtitle: 'Access 2026 division files on Google Drive',
    url: 'https://drive.google.com/drive/folders/18LbxI3A2uJeK7nsKJ0i69ap3SEZsUhre?usp=drive_link',
  },
]

const DPI = () => (
  <OpcrfLanding
    section="Part 1-A / Leadership"
    title="DepEd Policy and Issuances"
    description="Review DepEd policies, memoranda, and official issuances."
    backgroundImage={dpiBackground}
  >
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
      
      {/* 2x2 Clean Grid Section */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {policyHighlights.map((item) => (
          <article
            key={item.title}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: '#eff6ff',
                color: '#1d4ed8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </div>
            <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.925rem', lineHeight: 1.55 }}>{item.text}</p>
          </article>
        ))}
      </section>

      {/* SDOVC Memoranda Section */}
      <section
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '1.75rem',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        }}
      >
        <div style={{ marginBottom: '1.25rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a', fontWeight: 700 }}>
            SDOVC Memoranda Drive Folders
          </h2>
          <p style={{ margin: '0.25rem 0 0', fontSize: '0.875rem', color: '#64748b' }}>
            Direct access to official Google Drive repositories for division memoranda.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {memorandaLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem',
                borderRadius: '12px',
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9'
                e.currentTarget.style.borderColor = '#94a3b8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc'
                e.currentTarget.style.borderColor = '#cbd5e1'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    backgroundColor: '#fe271215',
                    padding: '0.6rem',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Google Drive / Folder Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill="#FFC107" d="M18.5 15.5l3.5-6H15l3.5 6z" />
                    <path fill="#FF3D00" d="M5.5 15.5l3.5 6h13l-3.5-6h-13z" />
                    <path fill="#4CAF50" d="M2 9.5l3.5 6h7l-3.5-6h-7z" />
                    <path fill="#1976D2" d="M9 3.5l-3.5 6h7L16 3.5H9z" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#0f172a', fontSize: '0.975rem', fontWeight: 600 }}>
                    {link.title}
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{link.subtitle}</span>
                </div>
              </div>

              {/* Arrow Icon */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#64748b" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </section>

    </div>
  </OpcrfLanding>
)

export default DPI