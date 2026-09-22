import OpcrfLanding from '../../OpcrfLanding'
import dpiBackground from '../../../assets/Leadership/DepEd.png'

const memorandaLinks = [
  {
    label: '2025 SDOVC Memoranda',
    url: 'https://drive.google.com/drive/folders/1Uk5NuifWrvTL-xq-rtuddrLhUQHu51w0?usp=drive_link',
  },
  {
    label: '2026 SDOVC Memoranda',
    url: 'https://drive.google.com/drive/folders/18LbxI3A2uJeK7nsKJ0i69ap3SEZsUhre?usp=drive_link',
  },
]

const policyHighlights = [
  {
    title: 'Department Orders',
    text: 'Official DepEd orders, policy guidelines, and standard operating procedures.',
  },
  {
    title: 'Memoranda & Circulars',
    text: 'Division and regional directives, updates, and instructional announcements.',
    links: memorandaLinks,
  },
  {
    title: 'Compliance Standards',
    text: 'Frameworks and legal mandates ensuring school governance aligns with national standards.',
  },
  {
    title: 'Implementation Reports',
    text: 'Documentation on the application and monitoring of official DepEd policies.',
  },
]

const DPI = () => (
  <OpcrfLanding
    section="Part 1-A / Leadership"
    title="DepEd Policy and Issuances"
    description="Review DepEd policies, memoranda, and official issuances."
    backgroundImage={dpiBackground}
  >
    <div
      className="opcrf-landing-content"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
        maxWidth: '1100px',
      }}
    >
      {policyHighlights.map((item) => (
        <article
          key={item.title}
          style={{
            background: '#fff',
            border: '1px solid #e6ecf0',
            borderRadius: '14px',
            padding: '1.25rem',
            boxShadow: '0 10px 24px rgba(18, 47, 74, 0.06)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3 style={{ margin: '0 0 0.6rem', color: '#102d44', fontSize: '1.06rem' }}>
            {item.title}
          </h3>
          <p style={{ margin: 0, color: '#5d6e80', lineHeight: 1.6 }}>{item.text}</p>

          {item.links && (
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {item.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0056b3',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  🔗 {link.label}
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  </OpcrfLanding>
)

export default DPI