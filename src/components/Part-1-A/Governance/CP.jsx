import OpcrfLanding from '../../OpcrfLanding'
import cpBackground from '../../../assets/Governance/CP.png'

const classProgramHighlights = [
  {
    title: 'Grade & Section Schedules',
    text: 'Official timetable schedules across grade levels ensuring complete subject area coverage.',
  },
  {
    title: 'Teacher Load Allocation',
    text: 'Distribution of teaching loads, specialized assignments, and advisory responsibility schedules.',
  },
  {
    title: 'Learning Area Delivery',
    text: 'Structured contact hours for core and contextualized subjects per curriculum requirements.',
  },
  {
    title: 'Classroom & Room Assignments',
    text: 'Optimized room utilization plans supporting safe and conducive learning environments.',
  },
]

const CP = () => (
  <OpcrfLanding
    section="Part 1-A / Governance & Accountability"
    title="Class Program"
    description="Review class programs and related school documentation."
    backgroundImage={cpBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {classProgramHighlights.map((item) => (
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

export default CP