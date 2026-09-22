import OpcrfLanding from '../../OpcrfLanding'
import inventoryBackground from '../../../assets/Governance/Inventory.png'

const facilityHighlights = [
  {
    title: 'Classroom & Infrastructure',
    text: 'Assessment and physical inventory of instructional spaces, buildings, and general facilities.',
  },
  {
    title: 'Equipment & Furniture',
    text: 'Tracking of desks, tables, administrative equipment, and essential learning tools.',
  },
  {
    title: 'Laboratory & Tech Assets',
    text: 'Records of science labs, ICT devices, digital media, and specialized learning modules.',
  },
  {
    title: 'Maintenance & Repairs',
    text: 'Condition reports and scheduled maintenance plans for sustained facility usability.',
  },
]

const Inventory = () => (
  <OpcrfLanding
    section="Part 1-A / Governance & Accountability"
    title="Inventory of School Facilities"
    description="Review the school's facilities inventory and supporting records."
    backgroundImage={inventoryBackground}
  >
    <div className="opcrf-landing-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '1100px' }}>
      {facilityHighlights.map((item) => (
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

export default Inventory