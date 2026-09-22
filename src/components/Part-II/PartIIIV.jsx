import OpcrfLanding from '../OpcrfLanding'
import './PartIIIV.css'

const highlights = [
  'School leadership and planning alignment',
  'Implementation progress and monitoring',
  'Partnerships, resource mobilization, and sustainability',
  'Outcome indicators and evidence of impact',
]

const PartIIIV = () => (
  <OpcrfLanding
    section="Part II / Institutional Performance"
    title="Part II – Outcomes and Impact"
    description="Review the school’s performance indicators, evidence, and improvement measures for the current implementation cycle."
  >
    <div className="partiiiv-grid">
      {highlights.map((item) => (
        <article key={item} className="partiiiv-card">
          <span className="partiiiv-icon" aria-hidden="true">✓</span>
          <p>{item}</p>
        </article>
      ))}
    </div>
  </OpcrfLanding>
)

export default PartIIIV
