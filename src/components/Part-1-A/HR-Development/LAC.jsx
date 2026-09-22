import OpcrfLanding from '../../OpcrfLanding'
import lacBackground from '../../../assets/HRD/LAC.png' // Adjust assets directory path if stored in HR/Governance folder

const lacHighlights = [
  {
    title: 'Professional Learning Networks',
    text: 'Collaborative teacher sessions designed to solve instructional challenges and share best practices.',
  },
  {
    title: 'Session Guides & Materials',
    text: 'Standardized modules, session logs, and resource materials used during LAC activities.',
  },
  {
    title: 'Capacity Building & Training',
    text: 'Continuous professional development focused on curriculum updates and pedagogical strategies.',
  },
  {
    title: 'Impact Assessment & Logs',
    text: 'Attendance sheets, activity completion reports, and evaluations measuring learning outcomes.',
  },
]

const LAC = () => (
  <OpcrfLanding
    section="Part 1-A / Human Resource & Development"
    title="LAC Sessions"
    description="Review learning action cell sessions and documentation."
    backgroundImage={lacBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {lacHighlights.map((item) => (
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

export default LAC