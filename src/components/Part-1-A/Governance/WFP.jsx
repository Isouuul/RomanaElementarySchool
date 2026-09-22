import OpcrfLanding from '../../OpcrfLanding'
import wfpBackground from '../../../assets/Governance/WFP.png'

const financialHighlights = [
  {
    title: 'Work & Financial Plan (WFP)',
    text: 'Detailed allocation of resources aligned with school improvement targets and educational goals.',
  },
  {
    title: 'Annual Procurement Plan (APP)',
    text: 'Scheduled acquisition of supplies, equipment, and services needed for school operations.',
  },
  {
    title: 'MOOE Allocation & Liquidation',
    text: 'Maintenance and Other Operating Expenses management, expense tracking, and transparent liquidation.',
  },
  {
    title: 'Annual Budget Allocation',
    text: 'Comprehensive overview of fund utilization, government grants, and school budget management.',
  },
]

const WFP = () => (
  <OpcrfLanding
    section="Part 1-A / Governance & Accountability"
    title="WFP / APP / MOOE / Annual Budget Allocation"
    description="Review work plans, procurement plans, MOOE, and annual budget records."
    backgroundImage={wfpBackground}
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

export default WFP