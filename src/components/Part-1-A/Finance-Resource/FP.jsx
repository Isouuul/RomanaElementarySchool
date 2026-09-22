import OpcrfLanding from '../../OpcrfLanding'
import shBackground from '../../../assets/Part-1-A-Curriculum-Teaching/SNS/SH.png'

const stakeholderHighlights = [
  {
    title: 'Community Partnerships',
    text: 'Collaborations with local government units, NGOs, and private partners supporting school projects.',
  },
  {
    title: 'PTA & Alumni Engagement',
    text: 'Active involvement and consultative meetings with Parents-Teachers Associations and alumni networks.',
  },
  {
    title: 'Resource Mobilization',
    text: 'Donations, sponsorships, and voluntary support generated through community involvement.',
  },
  {
    title: 'Stakeholder Reports',
    text: 'Documentation and transparency reports detailing community participation and contributions.',
  },
]

const FP = () => (
  <OpcrfLanding
    section="Part 1-A / Finance & Resource Management"
    title="Stakeholders Participation"
    description="Review stakeholder participation and resource mobilization evidence."
    backgroundImage={shBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {stakeholderHighlights.map((item) => (
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

export default FP