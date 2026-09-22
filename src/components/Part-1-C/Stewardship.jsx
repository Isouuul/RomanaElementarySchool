import OpcrfLanding from '../OpcrfLanding'
import fsBackground from '../../assets/Part-1-C/FS.png' // Adjust assets directory path if stored in Organizational Effectiveness or Governance folder

const stewardshipHighlights = [
  {
    title: 'Financial Integrity & Transparency',
    text: 'Rigorous financial reporting and transparent record-keeping for all school accounts.',
  },
  {
    title: 'Resource Allocation & Audit',
    text: 'Strategic distribution of financial resources with complete audit trails and compliance checks.',
  },
  {
    title: 'Fiscal Responsibility',
    text: 'Responsible budgeting and expense tracking aligned with official procurement guidelines.',
  },
  {
    title: 'Accountability Reports',
    text: 'Regular financial statements and transparency board updates for school stakeholders.',
  },
]

const Stewardship = () => (
  <OpcrfLanding
    section="Part 1-C / Organizational Effectiveness"
    title="Financial Stewardship"
    description="Review financial stewardship practices and supporting evidence."
    backgroundImage={fsBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {stewardshipHighlights.map((item) => (
        <article
          key={item.title}
          style={{
            background: '#fff',
            border: '1px solid #e6ecf0',
            borderRadius: '14px',
            padding: '1.25rem',
            boxShadow: '0 10px 24px rgba(18, 47, 74, 0.06)',
          }}
        >
          <h3 style={{ margin: '0 0 0.6rem', color: '#102d44', fontSize: '1.06rem' }}>{item.title}</h3>
          <p style={{ margin: 0, color: '#5d6e80', lineHeight: 1.6 }}>{item.text}</p>
        </article>
      ))}
    </div>
  </OpcrfLanding>
)

export default Stewardship