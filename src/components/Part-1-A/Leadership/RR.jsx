import OpcrfLanding from '../../OpcrfLanding'
import rrBackground from '../../../assets/Leadership/Required-reports.png'

const reportHighlights = [
  {
    title: 'Administrative Reports',
    text: 'Official school compliance records, operational summaries, and administrative documentations.',
  },
  {
    title: 'Academic Progress',
    text: 'Student performance summaries, grade assessments, and curriculum implementation tracking.',
  },
  {
    title: 'Financial & Resource',
    text: 'Budget utilization, resource allocation, and inventory reporting for school management.',
  },
  {
    title: 'Submission Logs',
    text: 'Timelines and records tracking scheduled submissions to division and regional offices.',
  },
]

const RR = () => (
  <OpcrfLanding
    section="Part 1-A / Leadership"
    title="Required Reports"
    description="Review required school reports and submission records."
    backgroundImage={rrBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {reportHighlights.map((item) => (
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

export default RR