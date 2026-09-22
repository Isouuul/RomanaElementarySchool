import { useEffect, useState } from 'react'
import Navigationbar from './components/navigationbar/Navigationbar'
import Dashboard from './components/Dashboard/Dashboard'
import Directory from './components/Directory/Directory'
import Calendar from './components/Calendar/Calendar'
import Resources from './components/Resources/Resources'
import CRLA from './components/Part-1-A/Curriculum-Teaching/CRLA'
import PISA from './components/Part-1-A/Curriculum-Teaching/PHIL-IRI'
import RMA from './components/Part-1-A/Curriculum-Teaching/RMA'
import Observation from './components/Part-1-A/Curriculum-Teaching/Observation'
import Kindergarten from './components/Part-1-A/Curriculum-Teaching/Kindergarten'
import ELE from './components/Part-1-A/Learning-Environment/ELE'
import CPP from './components/Part-1-A/Learning-Environment/CPP'
import SPA from './components/Part-1-A/Learning-Environment/SPA'
import DPI from './components/Part-1-A/Leadership/DPI'
import SCO from './components/Part-1-A/Leadership/SCO'
import RR from './components/Part-1-A/Leadership/RR'
import WFP from './components/Part-1-A/Governance/WFP'
import CP from './components/Part-1-A/Governance/CP'
import Inventory from './components/Part-1-A/Governance/Inventory'
import LAC from './components/Part-1-A/HR-Development/LAC'
import IPCRF from './components/Part-1-A/HR-Development/Praise'
import TeachersWelfare from './components/Part-1-A/HR-Development/Teachers-welfare'
import FP from './components/Part-1-A/Finance-Resource/FP'
import FU from './components/Part-1-A/Finance-Resource/FU'
import SNS from './components/Part-1-A/Finance-Resource/SNS'
import KRA1 from './components/Part-1-B/KRA-1'
import KRA2 from './components/Part-1-B/KRA-2'
import KRA3 from './components/Part-1-B/KRA-3'
import KRA4 from './components/Part-1-B/KRA-4'
import KRA5 from './components/Part-1-B/KRA-5'
import KRA6 from './components/Part-1-B/KRA-6'
import Stewardship from './components/Part-1-C/Stewardship'
import Process from './components/Part-1-C/Process'
import ClientSatisfaction from './components/Part-1-C/Client-Satisfaction'
import OPCRF from './components/2xlsx/OPCRF'
import OPCRFFinalDraft from './components/2xlsx/OPCRF-Final-Draft'
import PartIIIV from './components/Part-II/PartIIIV'

const opcrfPages = {
  crla: CRLA,
  'phil-iri': PISA,
  rma: RMA,
  observations: Observation,
  'kindergarten-enrolment': Kindergarten,
  'enhancement-env': ELE,
  'child-protection': CPP,
  'school-program': SPA,
  'deped-policy': DPI,
  'school-clubs': SCO,
  'required-reports': RR,
  'wfp-app-mooe': WFP,
  'class-program': CP,
  'facilities-inventory': Inventory,
  'lac-sessions': LAC,
  ipcrf: IPCRF,
  'teachers-welfare': TeachersWelfare,
  'stakeholders-participation': FP,
  'financial-utilization': FU,
  'nutritional-status': SNS,
  'kra-1': KRA1,
  'kra-2': KRA2,
  'kra-3': KRA3,
  'kra-4': KRA4,
  'kra-5': KRA5,
  'kra-6': KRA6,
  'financial-stewardship': Stewardship,
  'process-improvement': Process,
  'client-satisfaction': ClientSatisfaction,
  'opcrf-2025-2026': OPCRF,
  'opcrf-res-draft': OPCRFFinalDraft,
  'part-iii-v': PartIIIV,}

const App = () => {
  const [currentPage, setCurrentPage] = useState(window.location.hash.slice(1) || 'home')

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash.slice(1) || 'home')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    const OpcrfPage = opcrfPages[currentPage]

    if (OpcrfPage) {
      return <OpcrfPage />
    }

    switch (currentPage) {
      case 'directory':
        return <Directory />
      case 'calendar':
        return <Calendar />
      case 'resources':
      case 'issuances':
        return <Resources page={currentPage} />
      default:
        return <Dashboard />
    }
  }

  return (
    <div>
      <Navigationbar currentPage={currentPage} />
      <main>{renderPage()}</main>
    </div>
  )
}

export default App