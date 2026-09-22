import './OpcrfLanding.css'

const OpcrfLanding = ({ title, section, description, backgroundImage, children }) => {
  return (
    <section className="opcrf-landing">
      <div
        className={`opcrf-landing-header ${backgroundImage ? 'has-background' : ''}`}
        style={backgroundImage ? { '--opcrf-background-image': `url(${backgroundImage})` } : undefined}
      >
        <p className="opcrf-landing-kicker">{section}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children || (
        <div className="opcrf-landing-content">
          <span className="opcrf-landing-badge">OPCRF</span>
          <div>
            <h2>{title} workspace</h2>
            <p>This landing page is ready for the forms, files, and evidence related to this indicator.</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default OpcrfLanding
