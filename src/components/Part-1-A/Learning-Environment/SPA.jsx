import OpcrfLanding from '../../OpcrfLanding'
import spaBackground from '../../../assets/Learning Environment/SPA.png'

const programHighlights = [
  {
    title: 'Academic Programs',
    text: 'Learning interventions, literacy support, and classroom-based improvement initiatives.',
  },
  {
    title: 'Sports & Wellness',
    text: 'Physical activities and health initiatives that strengthen participation and student well-being.',
  },
  {
    title: 'Cultural Activities',
    text: 'Creative and values-based programs that celebrate heritage, expression, and belonging.',
  },
  {
    title: 'Community Engagement',
    text: 'Partnerships and service-learning activities that connect the school to families and communities.',
  },
]

const SPA = () => (
  <OpcrfLanding
    section="Part 1-A / Learning Environment"
    title="School Program / Activities"
    description="Review school programs, activities, and the learning experiences that support student growth."
    backgroundImage={spaBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {programHighlights.map((item) => (
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

export default SPA
