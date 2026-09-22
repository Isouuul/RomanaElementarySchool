import OpcrfLanding from '../../OpcrfLanding'
import scoBackground from '../../../assets/Leadership/School-clubs.png'

const clubHighlights = [
  {
    title: 'Student Governance',
    text: 'Elected student councils and leaders driving school initiatives and youth voice.',
  },
  {
    title: 'Co-Curricular Clubs',
    text: 'Interest-based organizations enhancing academic, artistic, and technical skills.',
  },
  {
    title: 'Leadership Development',
    text: 'Training, workshops, and team-building activities designed to empower student leaders.',
  },
  {
    title: 'Community & Service',
    text: 'Outreach programs and student-led campaigns supporting community welfare.',
  },
]

const SCO = () => (
  <OpcrfLanding
    section="Part 1-A / Leadership"
    title="School Clubs and Organization"
    description="Review school clubs, organizations, and supporting documentation."
    backgroundImage={scoBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {clubHighlights.map((item) => (
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

export default SCO