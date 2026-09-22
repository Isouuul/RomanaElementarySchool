import OpcrfLanding from '../../OpcrfLanding'
import twBackground from '../../../assets/HRD/TW.png' // Adjust assets directory path if stored in HR folder

const welfareHighlights = [
  {
    title: 'Health & Wellness Initiatives',
    text: 'Physical and mental health awareness programs, medical checkups, and wellness activities.',
  },
  {
    title: 'Faculty Morale & Incentives',
    text: 'Team-building sessions, teacher appreciation events, and supportive workplace initiatives.',
  },
  {
    title: 'Benefits & Assistance',
    text: 'Information and guidance on official teaching benefits, leave credits, and welfare assistance.',
  },
  {
    title: 'Workplace Safety & Comfort',
    text: 'Measures and workplace improvements supporting a safe, inclusive, and conductive environment.',
  },
]

const TeachersWelfare = () => (
  <OpcrfLanding
    section="Part 1-A / Human Resource & Development"
    title="Teachers Welfare (Program & Activities)"
    description="Review teacher welfare programs and activities."
    backgroundImage={twBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {welfareHighlights.map((item) => (
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

export default TeachersWelfare