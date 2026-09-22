import OpcrfLanding from '../OpcrfLanding'
import csBackground from '../../assets/Part-1-C/CS.png' // Adjust assets directory path if stored in Organizational Effectiveness or Governance folder

const clientSatisfactionHighlights = [
  {
    title: 'Client Feedback & Surveys',
    text: 'Client Satisfaction Measurement (CSM) results, feedback forms, and survey analyses.',
  },
  {
    title: 'Service Quality & Delivery',
    text: 'Evaluations on promptness, courtesy, and efficiency in delivering public school services.',
  },
  {
    title: 'Resolution & Action Taken',
    text: 'Documentation on addressing stakeholder feedback, complaints, and service improvement plans.',
  },
  {
    title: 'Stakeholder Satisfaction Summaries',
    text: 'Consolidated reports tracking satisfaction rates among students, parents, and partners.',
  },
]

const ClientSatisfaction = () => (
  <OpcrfLanding
    section="Part 1-C / Organizational Effectiveness"
    title="Client Satisfaction"
    description="Review client satisfaction records, feedback, and actions taken."
    backgroundImage={csBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {clientSatisfactionHighlights.map((item) => (
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

export default ClientSatisfaction