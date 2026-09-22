import OpcrfLanding from '../../OpcrfLanding'
import fuBackground from '../../../assets/Part-1-A-Curriculum-Teaching/SNS/FU.png'

const financialHighlights = [
  {
    title: 'Fund Allocation & Disbursement',
    text: 'Records of financial disbursements and operational expenses in accordance with approved budgets.',
  },
  {
    title: 'Liquidation Documentation',
    text: 'Comprehensive receipts, invoices, and audit-ready liquidation reports.',
  },
  {
    title: 'Budget Optimization',
    text: 'Tracking efficiency in budget utilization to maximize resource impact on school programs.',
  },
  {
    title: 'Financial Auditing & Compliance',
    text: 'Transparency logs and verification documents ensuring adherence to official accounting standards.',
  },
]

const FU = () => (
  <OpcrfLanding
    section="Part 1-A / Finance & Resource Management"
    title="Financial Utilization"
    description="Review financial utilization records and supporting evidence."
    backgroundImage={fuBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {financialHighlights.map((item) => (
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

export default FU