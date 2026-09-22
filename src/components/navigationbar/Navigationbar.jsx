import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/romana-es-logo.jpg'
import './Navigationbar.css'

const Navigationbar = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openSubmenus, setOpenSubmenus] = useState({})
  const navRef = useRef(null)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setIsMenuOpen(false)
        setOpenSubmenus({})
      }
    }

    const closeOnOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
        setIsMenuOpen(false)
        setOpenSubmenus({})
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('click', closeOnOutsideClick)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('click', closeOnOutsideClick)
    }
  }, [])

  const closeNavigation = () => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
    setOpenSubmenus({})
  }

  const toggleDropdown = (name) => {
    setOpenDropdown((current) => (current === name ? null : name))
  }

  const toggleSubmenu = (key, event) => {
    event.stopPropagation()
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <nav className="navbar" ref={navRef}>
      <a className="navbar-brand" href="#home" onClick={closeNavigation}>
        <span className="brand-mark" aria-hidden="true">
          <img src={logo} alt="" className="brand-logo" />
        </span>
        <span className="brand-copy">
          <span className="brand-title">Romana Elementary School</span>
        </span>
      </a>

      <button
        className={`navbar-toggle ${isMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation"
      >
        <span className="hamburger"></span>
      </button>

      <div className={`navbar-panel ${isMenuOpen ? 'is-open' : ''}`}>
        <ul className="navbar-links" id="primary-navigation">
          <li><a className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} href="#home" onClick={closeNavigation}>Dashboard</a></li>
          <li><a className={`nav-link ${currentPage === 'directory' ? 'active' : ''}`} href="#directory" onClick={closeNavigation}>Directory</a></li>
          <li><a className={`nav-link ${currentPage === 'calendar' ? 'active' : ''}`} href="#calendar" onClick={closeNavigation}>Calendar</a></li>
          <li><a className={`nav-link ${currentPage === 'issuances' ? 'active' : ''}`} href="#issuances" onClick={closeNavigation}>Issuances</a></li>

          {/* OPCRF Dropdown */}
          <li
            className="dropdown"
          >
            <button
              className={`nav-link dropdown-toggle ${openDropdown === 'opcrf' ? 'is-active' : ''}`}
              onClick={() => toggleDropdown('opcrf')}
              aria-expanded={openDropdown === 'opcrf'}
              aria-haspopup="true"
            >
              OPCRF <span className={`chevron ${openDropdown === 'opcrf' ? 'is-open' : ''}`} aria-hidden="true"></span>
            </button>

            <ul className={`dropdown-menu ${openDropdown === 'opcrf' ? 'show' : ''}`}>
              <li className="dropdown-heading">OPCRF Forms</li>

              {/* PART 1-A */}
              <li className="nested-dropdown">
                <button
                  className="dropdown-item submenu-toggle"
                  onClick={(e) => toggleSubmenu('part1a', e)}
                >
                  <span>Part 1-A: Commitment to Organization Outcomes</span>
                  <span className={`submenu-caret ${openSubmenus.part1a ? 'is-open' : ''}`} aria-hidden="true"></span>
                </button>
                {openSubmenus.part1a && (
                  <ul className="submenu">
                    {/* Curriculum & Teaching */}
                    <li className="nested-dropdown">
                      <button
                        className="dropdown-item submenu-toggle"
                        onClick={(e) => toggleSubmenu('curriculum', e)}
                      >
                        <span>Curriculum &amp; Teaching</span>
                        <span className={`submenu-caret ${openSubmenus.curriculum ? 'is-open' : ''}`} aria-hidden="true"></span>
                      </button>
                      {openSubmenus.curriculum && (
                        <ul className="submenu">
                          <li><a href="#crla" onClick={closeNavigation}>CRLA</a></li>
                          <li><a href="#phil-iri" onClick={closeNavigation}>PHIL-IRI</a></li>

                          <li><a href="#rma" onClick={closeNavigation}>RMA</a></li>

                          <li><a href="#observations" onClick={closeNavigation}>Observations</a></li>
                          <li><a href="#kindergarten-enrolment" onClick={closeNavigation}>Kindergarten Enrolment</a></li>
                        </ul>
                      )}
                    </li>

                    {/* Learning Environment */}
                    <li className="nested-dropdown">
                      <button
                        className="dropdown-item submenu-toggle"
                        onClick={(e) => toggleSubmenu('learningEnv', e)}
                      >
                        <span>Learning Environment</span>
                        <span className={`submenu-caret ${openSubmenus.learningEnv ? 'is-open' : ''}`} aria-hidden="true"></span>
                      </button>
                      {openSubmenus.learningEnv && (
                        <ul className="submenu">
                          <li><a href="#enhancement-env" onClick={closeNavigation}>Enhancement of Learning Environment</a></li>
                          <li><a href="#child-protection" onClick={closeNavigation}>Child Protection Policy</a></li>
                          <li><a href="#school-program" onClick={closeNavigation}>School Program / Activities</a></li>
                        </ul>
                      )}
                    </li>

                    {/* Leadership */}
                    <li className="nested-dropdown">
                      <button
                        className="dropdown-item submenu-toggle"
                        onClick={(e) => toggleSubmenu('leadership', e)}
                      >
                        <span>Leadership</span>
                        <span className={`submenu-caret ${openSubmenus.leadership ? 'is-open' : ''}`} aria-hidden="true"></span>
                      </button>
                      {openSubmenus.leadership && (
                        <ul className="submenu">
                          <li><a href="#deped-policy" onClick={closeNavigation}>DepEd Policy and Issuances</a></li>
                          <li><a href="#school-clubs" onClick={closeNavigation}>School Clubs and Organization</a></li>
                          <li><a href="#required-reports" onClick={closeNavigation}>Required Reports</a></li>
                        </ul>
                      )}
                    </li>

                    {/* Governance & Accountability */}
                    <li className="nested-dropdown">
                      <button
                        className="dropdown-item submenu-toggle"
                        onClick={(e) => toggleSubmenu('governance', e)}
                      >
                        <span>Governance &amp; Accountability</span>
                        <span className={`submenu-caret ${openSubmenus.governance ? 'is-open' : ''}`} aria-hidden="true"></span>
                      </button>
                      {openSubmenus.governance && (
                        <ul className="submenu">
                          <li><a href="#wfp-app-mooe" onClick={closeNavigation}>WFP / APP / MOOE / Annual Budget Allocation</a></li>
                          <li><a href="#class-program" onClick={closeNavigation}>Class Program</a></li>
                          <li><a href="#facilities-inventory" onClick={closeNavigation}>Inventory of School Facilities</a></li>
                        </ul>
                      )}
                    </li>

                    {/* Human Resource & Development */}
                    <li className="nested-dropdown">
                      <button
                        className="dropdown-item submenu-toggle"
                        onClick={(e) => toggleSubmenu('hrd', e)}
                      >
                        <span>Human Resource &amp; Development</span>
                        <span className={`submenu-caret ${openSubmenus.hrd ? 'is-open' : ''}`} aria-hidden="true"></span>
                      </button>
                      {openSubmenus.hrd && (
                        <ul className="submenu">
                          <li><a href="#lac-sessions" onClick={closeNavigation}>LAC Sessions</a></li>
                          <li><a href="#ipcrf" onClick={closeNavigation}>IPCRF</a></li>
                          <li><a href="#teachers-welfare" onClick={closeNavigation}>Teachers Welfare (Program &amp; Activities)</a></li>
                        </ul>
                      )}
                    </li>

                    {/* Finance & Resource Management & Mobilization */}
                    <li className="nested-dropdown">
                      <button
                        className="dropdown-item submenu-toggle"
                        onClick={(e) => toggleSubmenu('finance', e)}
                      >
                        <span>Finance &amp; Resource Management &amp; Mobilization</span>
                        <span className={`submenu-caret ${openSubmenus.finance ? 'is-open' : ''}`} aria-hidden="true"></span>
                      </button>
                      {openSubmenus.finance && (
                        <ul className="submenu">
                          <li><a href="#stakeholders-participation" onClick={closeNavigation}>Stakeholders Participation</a></li>
                          <li><a href="#financial-utilization" onClick={closeNavigation}>Financial Utilization</a></li>
                          <li><a href="#nutritional-status" onClick={closeNavigation}>Students Nutritional Status</a></li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {/* PART 1-B */}
              <li className="nested-dropdown">
                <button
                  className="dropdown-item submenu-toggle"
                  onClick={(e) => toggleSubmenu('part1b', e)}
                >
                  <span>Part 1-B: Innovating &amp; Intervening</span>
                  <span className={`submenu-caret ${openSubmenus.part1b ? 'is-open' : ''}`} aria-hidden="true"></span>
                </button>
                {openSubmenus.part1b && (
                  <ul className="submenu">
                    <li><a href="#kra-1" onClick={closeNavigation}>KRA 1</a></li>
                    <li><a href="#kra-2" onClick={closeNavigation}>KRA 2</a></li>
                    <li><a href="#kra-3" onClick={closeNavigation}>KRA 3</a></li>
                    <li><a href="#kra-4" onClick={closeNavigation}>KRA 4</a></li>
                    <li><a href="#kra-5" onClick={closeNavigation}>KRA 5</a></li>
                    <li><a href="#kra-6" onClick={closeNavigation}>KRA 6</a></li>
                  </ul>
                )}
              </li>

              {/* PART 1-C */}
              <li className="nested-dropdown">
                <button
                  className="dropdown-item submenu-toggle"
                  onClick={(e) => toggleSubmenu('part1c', e)}
                >
                  <span>Part 1-C: Organizational Effectiveness</span>
                  <span className={`submenu-caret ${openSubmenus.part1c ? 'is-open' : ''}`} aria-hidden="true"></span>
                </button>
                {openSubmenus.part1c && (
                  <ul className="submenu">
                    <li><a href="#financial-stewardship" onClick={closeNavigation}>Financial Stewardship</a></li>
                    <li><a href="#process-improvement" onClick={closeNavigation}>Process Improvement</a></li>
                    <li><a href="#client-satisfaction" onClick={closeNavigation}>Client Satisfaction</a></li>
                  </ul>
                )}
              </li>

              {/* PART II - IV */}
              <li>
                <a className="dropdown-item" href="#part-iii-v" onClick={closeNavigation}>
                  Part II - IV
                </a>
              </li>

              <li className="dropdown-divider" aria-hidden="true"></li>
              <li><a className="dropdown-item file-link" href="#opcrf-2025-2026" onClick={closeNavigation}>OPCRF 2025-2026 Final <span className="file-type">XLS</span></a></li>
              <li><a className="dropdown-item file-link" href="#opcrf-res-draft" onClick={closeNavigation}>OPCRF RES Final Draft <span className="file-type">XLS</span></a></li>
            </ul>
          </li>

          <li><a className={`nav-link ${currentPage === 'resources' ? 'active' : ''}`} href="#resources" onClick={closeNavigation}>Resources</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigationbar