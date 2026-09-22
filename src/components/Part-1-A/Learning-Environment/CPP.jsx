import OpcrfLanding from '../../OpcrfLanding'
import cppBackground from '../../../assets/Learning Environment/CPP.png'

const policyHighlights = [
  {
    title: 'Protection First',
    text: 'The school promotes safe, respectful, and supportive learning spaces for every learner.',
  },
  {
    title: 'Clear Reporting',
    text: 'Students, teachers, and parents know how to report concerns and seek prompt help.',
  },
  {
    title: 'Duty to Respond',
    text: 'Appropriate actions are taken to protect learners, document incidents, and maintain confidentiality.',
  },
  {
    title: 'Whole-School Culture',
    text: 'Child protection is reinforced through values education, teacher guidance, and community engagement.',
  },
]

const CPP = () => (
  <OpcrfLanding
    section="Part 1-A / Learning Environment"
    title="Child Protection Policy"
    description="Review the school's child protection policies and the systems used to safeguard every learner."
    backgroundImage={cppBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {policyHighlights.map((item) => (
        <article
          key={item.title}
          style={{
            background: '#fff',
            border: '1px solid #e9e7d9',
            borderRadius: '14px',
            padding: '1.25rem',
            boxShadow: '0 10px 24px rgba(13, 35, 56, 0.06)',
          }}
        >
          <h3 style={{ margin: '0 0 0.6rem', color: '#112f46', fontSize: '1.05rem' }}>{item.title}</h3>
          <p style={{ margin: 0, color: '#5c6d7d', lineHeight: 1.6 }}>{item.text}</p>
        </article>
      ))}
    </div>
  </OpcrfLanding>
)

export default CPP
