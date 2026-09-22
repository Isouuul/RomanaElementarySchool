import OpcrfLanding from '../../OpcrfLanding'
import dpiBackground from '../../../assets/Leadership/DepEd.png'

const policyHighlights = [
  {
    title: 'Department Orders',
    text: 'Official DepEd orders, policy guidelines, and standard operating procedures.',
  },
  {
    title: 'Memoranda & Circulars',
    text: 'Division and regional directives, updates, and instructional announcements.',
  },
  {
    title: 'Compliance Standards',
    text: 'Frameworks and legal mandates ensuring school governance aligns with national standards.',
  },
  {
    title: 'Implementation Reports',
    text: 'Documentation on the application and monitoring of official DepEd policies.',
  },
]

const DPI = () => (
  <OpcrfLanding
    section="Part 1-A / Leadership"
    title="DepEd Policy and Issuances"
    description="Review DepEd policies, memoranda, and official issuances."
    backgroundImage={dpiBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {policyHighlights.map((item) => (
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

export default DPI