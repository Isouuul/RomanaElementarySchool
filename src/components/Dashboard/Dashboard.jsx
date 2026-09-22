import React, { useState } from 'react'
import './Dashboard.css'

const dashboardTabs = [
  {
    id: 'personnel-profile',
    label: '1. Personnel Profile',
    title: 'School Personnel Profile Dashboard',
    description: 'Overview of teaching and non-teaching staff, credentials, and designations.',
    embedUrl: 'https://depedph.sharepoint.com/:x:/r/sites/ROMANAELEMENTARYSCHOOL117443/_layouts/15/Doc.aspx?sourcedoc=%7B945F0B8A-D737-4DFC-AF33-A17FE45AAE90%7D&action=default',
  },
  {
    id: 'teaching-load',
    label: '2. Teaching Load',
    title: 'Teaching Load & Assignment Dashboard',
    description: 'Class programs, teaching loads, and advisory distribution across grade levels.',
    embedUrl: 'https://depedph.sharepoint.com/:x:/r/sites/ROMANAELEMENTARYSCHOOL117443/_layouts/15/Doc.aspx?sourcedoc=%7B945F0B8A-D737-4DFC-AF33-A17FE45AAE90%7D&action=default',
  },
  {
    id: 'building-inventory',
    label: '3. Building Inventory',
    title: 'School Building & Infrastructure Inventory',
    description: 'Status, capacity, and physical inventory of school buildings and structures.',
    embedUrl: 'https://depedph.sharepoint.com/:x:/r/sites/ROMANAELEMENTARYSCHOOL117443/_layouts/15/Doc.aspx?sourcedoc=%7B945F0B8A-D737-4DFC-AF33-A17FE45AAE90%7D&action=default',
  },
  {
    id: 'classroom-resources',
    label: '4. Classroom Resources',
    title: 'Classroom Furniture & Asset Inventory',
    description: 'Inventory of desks, chairs, ICT equipment, and learning materials.',
    embedUrl: 'https://depedph.sharepoint.com/:x:/r/sites/ROMANAELEMENTARYSCHOOL117443/_layouts/15/Doc.aspx?sourcedoc=%7B945F0B8A-D737-4DFC-AF33-A17FE45AAE90%7D&action=default',
  },
  {
    id: 'crla-summary',
    label: '5. Academic / CRLA Summary',
    title: 'School CRLA & Academic Performance Dashboard',
    description: 'Comprehensive Rapid Literacy Assessment (Grade 3 - Filipino & English).',
    embedUrl: 'https://depedph.sharepoint.com/:x:/r/sites/ROMANAELEMENTARYSCHOOL117443/_layouts/15/Doc.aspx?sourcedoc=%7B945F0B8A-D737-4DFC-AF33-A17FE45AAE90%7D&file=Copy%20of%20CRLA3_SchoolSummary_v3b%202nd%20copy%202025-2026%20BOSY.xlsx&action=default&mobileredirect=true&wdwpf=doclib-t',
  },
]

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(dashboardTabs[0].id)

  const currentTab = dashboardTabs.find((tab) => tab.id === activeTab)

  return (
    <div className="dashboard-container">
      {/* Tab Navigation Controls */}
      <nav className="dashboard-tabs" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #e6ecf0', paddingBottom: '0.5rem', flexWrap: 'wrap' }}>
        {dashboardTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: activeTab === tab.id ? '600' : 'normal',
              background: activeTab === tab.id ? '#102d44' : '#f0f4f8',
              color: activeTab === tab.id ? '#ffffff' : '#5d6e80',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Header Info */}
      <div className="dashboard-header">
        <h1>{currentTab.title}</h1>
        <p>{currentTab.description}</p>
      </div>

      {/* Embedded Excel / Sheet View */}
      <div className="excel-frame-container" style={{ marginTop: '1rem' }}>
        <iframe
          title={currentTab.title}
          src={currentTab.embedUrl}
          width="100%"
          height="700px"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  )
}

export default Dashboard