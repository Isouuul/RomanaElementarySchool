import { useState } from 'react';
import './Directory.css';

// Import image assets matching your project structure
import SDSImg from '../../assets/Board-Members/EXECOM/SDS.jpg';
import ASDSImg from '../../assets/Board-Members/EXECOM/ASDS.jpg';
import CIDImg from '../../assets/Board-Members/EXECOM/CID CHIEF.jpg';
import SGODImg from '../../assets/Board-Members/EXECOM/SGOD CHIEF.jpg';
import KatherineImg from '../../assets/Board-Members/EXECOM/KATHERINE B. PAMBUSAN, FOSTER SUPERVISOR.png';

import AlayonImg from '../../assets/Board-Members/RES FACULTY/Alayon.png';
import AycoImg from '../../assets/Board-Members/RES FACULTY/Ayco.png';
import DelatorreImg from '../../assets/Board-Members/RES FACULTY/Delatorre.png';
import EstocadaImg from '../../assets/Board-Members/RES FACULTY/Estocada.png';
import JuaquinImg from '../../assets/Board-Members/RES FACULTY/Juaquin.png';
import PunzalanImg from '../../assets/Board-Members/RES FACULTY/Punzalan.png';
import RomanoImg from '../../assets/Board-Members/RES FACULTY/Romano.png';
import SaudeImg from '../../assets/Board-Members/RES FACULTY/Saude.png';
import OsanoFacultyImg from '../../assets/Board-Members/RES FACULTY/OSANO (4).png';

import DeocampoImg from '../../assets/Board-Members/NON-TEACHING AND SUBS/Deocampo.png';
import JumbasImg from '../../assets/Board-Members/NON-TEACHING AND SUBS/Jumbas.png';
import ParrenoImg from '../../assets/Board-Members/NON-TEACHING AND SUBS/Parreno.png';
import SeballosImg from '../../assets/Board-Members/NON-TEACHING AND SUBS/Seballos.png';
import SolomonImg from '../../assets/Board-Members/NON-TEACHING AND SUBS/Solomon.jpg';
import ValenteImg from '../../assets/Board-Members/NON-TEACHING AND SUBS/Valente.png';
import OsanoStaffImg from '../../assets/Board-Members/NON-TEACHING AND SUBS/OSANO (4).png';

const DIRECTORY_DATA = [
  // Executive Committee / Board Members
  { id: 1, name: 'Portia Mission Mallorca', role: 'Schools Division Superintendent', category: 'execom', image: SDSImg, email: 'sds@deped.gov.ph' },
  { id: 2, name: 'Roger Z. Rochar', role: 'OIC - Assistant Division Superintendent', category: 'execom', image: ASDSImg, email: 'asds@deped.gov.ph' },
  { id: 3, name: 'Leny A. Nillos, PhD', role: 'Chief Education Supervisor - Curriculum and Implementation Division', category: 'execom', image: CIDImg, email: 'cid@deped.gov.ph' },
  { id: 4, name: 'Ronamae V. Reliquias', role: 'Chief Education Supervisor - Schools Governance and Operations Division', category: 'execom', image: SGODImg, email: 'sgod@deped.gov.ph' },
  { id: 5, name: 'Katherine B. Pambusan', role: 'Education Program Supervisor - Foster Supervisor', category: 'execom', image: KatherineImg, email: 'katherine.pambusan@deped.gov.ph' },

  // Faculty
  { id: 6, name: 'Ritchie S. Alayon', role: 'Teaching Personnel', category: 'faculty', image: AlayonImg, email: 'alayon@school.edu.ph' },
  { id: 7, name: 'Cynthia P. Ayco', role: 'Teaching Personnel', category: 'faculty', image: AycoImg, email: 'ayco@school.edu.ph' },
  { id: 8, name: 'Marian Grace D. De La Torre', role: 'Teaching Personnel', category: 'faculty', image: DelatorreImg, email: 'delatorre@school.edu.ph' },
  { id: 9, name: 'Cherrie I. Estocada', role: 'Teaching Personnel', category: 'faculty', image: EstocadaImg, email: 'estocada@school.edu.ph' },
  { id: 10, name: 'Maricar F. Juaquin', role: 'Teaching Personnel', category: 'faculty', image: JuaquinImg, email: 'juaquin@school.edu.ph' },
  { id: 11, name: 'Ramona B. Punzalan', role: 'Teaching Personnel', category: 'faculty', image: PunzalanImg, email: 'punzalan@school.edu.ph' },
  { id: 12, name: 'Jonathan J. Romano', role: 'Teaching Personnel', category: 'faculty', image: RomanoImg, email: 'romano@school.edu.ph' },
  { id: 13, name: 'Mary Lois L. Saude', role: 'Teaching Personnel', category: 'faculty', image: SaudeImg, email: 'saude@school.edu.ph' },
  { id: 14, name: 'Osano', role: 'Teaching Personnel', category: 'faculty', image: OsanoFacultyImg, email: 'osano@school.edu.ph' },

  // Non-Teaching & Staff (Welson Solomon ordered right after Jumbas)
  { id: 15, name: 'Bernalyn J. Deocampo', role: 'Kindergarten Substitute Teacher', category: 'staff', image: DeocampoImg, email: 'deocampo@school.edu.ph' },
  { id: 16, name: 'Reynold P. Jumbas', role: 'Factotum', category: 'staff', image: JumbasImg, email: 'jumbas@school.edu.ph' },
  { id: 19, name: 'MC Welson C. Solomon', role: 'Head Teacher III', category: 'staff', image: SolomonImg, email: 'solomon@school.edu.ph' },
  { id: 17, name: 'Nathaniel B. Parreño', role: 'Administrative Officer II', category: 'staff', image: ParrenoImg, email: 'parreno@school.edu.ph' },
  { id: 18, name: 'Desiree O. Seballos', role: 'Grade 2 Substitute Teacher', category: 'staff', image: SeballosImg, email: 'seballos@school.edu.ph' },
  { id: 20, name: 'Marisa C. Valente', role: 'Contract of Service', category: 'staff', image: ValenteImg, email: 'valente@school.edu.ph' },
  { id: 21, name: 'Osano', role: 'Non-Teaching Personnel', category: 'staff', image: OsanoStaffImg, email: 'osano@school.edu.ph' },
];

const DIRECTORY_GROUPS = [
  { id: 'execom', label: 'Executive Committee' },
  { id: 'faculty', label: 'Teaching Faculty' },
  { id: 'staff', label: 'Support Staff' },
];

const Directory = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = DIRECTORY_DATA.filter((member) => {
    const matchesTab = activeTab === 'all' || member.category === activeTab;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Helper function to return members in correct display order per category group
  const getGroupMembers = (groupId) => {
    let groupMembers = filteredMembers.filter((member) => member.category === groupId);

    if (activeTab === 'all') {
      if (groupId === 'execom') {
        // Append Welson right after ExeCom when viewing 'all'
        const welson = filteredMembers.find((m) => m.id === 19);
        if (welson && !groupMembers.some((m) => m.id === 19)) {
          groupMembers = [...groupMembers, welson];
        }
      } else if (groupId === 'staff') {
        // Exclude Welson from Support Staff section when 'all' is active
        groupMembers = groupMembers.filter((m) => m.id !== 19);
      }
    }

    return groupMembers;
  };

  return (
    <section className="page-container">
      <header className="page-header">
        <span className="page-kicker">Romana Elementary School</span>
        <h1>School Directory</h1>
        <p>Connect with our school executive leadership, faculty, and administrative support team.</p>
      </header>

      {/* Controls: Search and Category Tabs */}
      <div className="directory-controls">
        <div className="search-bar">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            type="text" 
            placeholder="Search personnel or role..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="tab-filters">
          <button className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>All</button>
          <button className={activeTab === 'execom' ? 'active' : ''} onClick={() => setActiveTab('execom')}>Board & Execom</button>
          <button className={activeTab === 'faculty' ? 'active' : ''} onClick={() => setActiveTab('faculty')}>Teaching Faculty</button>
          <button className={activeTab === 'staff' ? 'active' : ''} onClick={() => setActiveTab('staff')}>Support Staff</button>
        </div>
      </div>

      {/* Directory Groups */}
      {filteredMembers.length > 0 ? (
        DIRECTORY_GROUPS.map((group) => {
          const groupMembers = getGroupMembers(group.id);

          if (groupMembers.length === 0) return null;

          return (
            <section className="directory-group" key={group.id}>
              {activeTab === 'all' && <h2 className="directory-group-title">{group.label}</h2>}
              <div className="directory-grid">
                {groupMembers.map((member) => (
                  <article key={member.id} className={`directory-card ${member.category}`}>
                    <div className="card-avatar-wrapper">
                      <img src={member.image} alt={member.name} className="card-avatar" />
                    </div>
                    <div className="card-info">
                      <span className="badge">{member.category.toUpperCase()}</span>
                      <h2>{member.name}</h2>
                      <p className="role">{member.role}</p>
                      <a href={`mailto:${member.email}`} className="email-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        {member.email}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })
      ) : (
        <div className="no-results">
          <p>No personnel found matching your search.</p>
        </div>
      )}
    </section>
  );
};

export default Directory;