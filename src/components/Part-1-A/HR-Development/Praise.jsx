import OpcrfLanding from '../../OpcrfLanding'
import praiseBackground from '../../../assets/HRD/Praise.png' // Adjust assets directory path if stored in HR folder

const praiseHighlights = [
  {
    title: 'Individual Performance Commitments',
    text: 'IPCRF target setting, evaluation records, and performance ratings for teaching staff.',
  },
  {
    title: 'Rewards & Recognition System',
    text: 'PRAISE committee documentation, employee awards, and recognition for outstanding service.',
  },
  {
    title: 'Performance Monitoring & Coaching',
    text: 'Individual development plans, coaching logs, and performance tracking across rating periods.',
  },
  {
    title: 'Professional Growth & Mentorship',
    text: 'Capacity building records and career advancement tracking aligned with DepEd standards.',
  },
]

const Praise = () => (
  <OpcrfLanding
    section="Part 1-A / Human Resource & Development"
    title="IPCRF"
    description="Review individual performance commitment and review records."
    backgroundImage={praiseBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {praiseHighlights.map((item) => (
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

export default Praise