import { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import OpcrfLanding from '../../OpcrfLanding'
import crlaBackground from '../../../assets/Part-1-A-Curriculum-Teaching/CRLA/CRLA.png'
import './CRLA.css'

const PERIODS = ['BOSY', 'MOSY', 'EOSY']
const CATEGORIES = [
  { id: 'Grade1', label: 'Grade 1' },
  { id: 'Grade2', label: 'Grade 2' },
  { id: 'Grade3', label: 'Grade 3' },
  { id: 'SchoolSummary', label: 'School Summary' },
]

const FILES = {
  BOSY: {
    Grade1: 'CRLA GRADE 1.xlsx',
    Grade2: 'CRLA GRADE 2.xlsx',
    Grade3: 'CRLA GRADE 3.xlsx',
    SchoolSummary: 'CRLA2_SchoolSummary_v1 RES - BOSY RESULT 2025.xlsx',
  },
  MOSY: {
    Grade1: 'CRLA2_Grade1Scoresheet_v1 MID.xlsx',
    Grade2: 'MOSY_CRLA2_Grade2.xlsx',
    Grade3: 'CRLA2_GRADE3_MOSY.xlsx',
    SchoolSummary: 'CRLA2_SchoolSummary_v1 RES - MOSY RESULT 2025.xlsx',
  },
  EOSY: {
    Grade1: 'CRLA_GRADE1_EOSY.xlsx',
    Grade2: 'CRLA_GRADE2_EOSY.xlsx',
    Grade3: 'CRLA_GRADE3_EOSY.xlsx',
    SchoolSummary: 'CRLA3_SchoolSummary_v3d.xlsx',
  },
}

const CRLA = () => {
  const [activePeriod, setActivePeriod] = useState('BOSY')
  const [activeCategory, setActiveCategory] = useState('Grade1')
  const [tableData, setTableData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchExcelData = async () => {
      setLoading(true)
      try {
        const fileName = FILES[activePeriod][activeCategory]
        const filePath = `/data/CRLA/${activePeriod}/${encodeURIComponent(fileName)}`
        const response = await fetch(filePath)
        
        if (!response.ok) {
          throw new Error(`File not found: ${filePath}`)
        }

        const arrayBuffer = await response.arrayBuffer()
        const workbook = XLSX.read(arrayBuffer, { type: 'array' })
        
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { defval: '' })

        setTableData(jsonData)
      } catch (err) {
        console.error('Error loading CRLA workbook:', err)
        setTableData([])
      } finally {
        setLoading(false)
      }
    }

    fetchExcelData()
  }, [activePeriod, activeCategory])

  return (
    <div className="crla-container">
      <OpcrfLanding
        section="Part 1-A / Curriculum & Teaching"
        title="CRLA"
        description="Access the Comprehensive Rapid Literacy Assessment workspace."
        backgroundImage={crlaBackground}
      />

      {/* Control Panel */}
      <div className="crla-controls">
        <div className="crla-control-group">
          <strong>Period</strong>
          {PERIODS.map((period) => (
            <button
              className={activePeriod === period ? 'is-active' : ''}
              key={period}
              onClick={() => setActivePeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>

        <div className="crla-control-group">
          <strong>View</strong>
          {CATEGORIES.map((cat) => (
            <button
              className={activeCategory === cat.id ? 'is-active' : ''}
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table Data Viewer */}
      <div className="crla-data-view">
        <h3>
          {activePeriod} — {CATEGORIES.find((c) => c.id === activeCategory)?.label}
        </h3>

        {loading ? (
          <p>Loading spreadsheet data...</p>
        ) : tableData.length > 0 ? (
          <div className="crla-table-wrap">
            <table>
              <thead>
                <tr>
                  {Object.keys(tableData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.slice(0, 50).map((row, idx) => (
                  <tr key={idx}>
                    {Object.values(row).map((val, cellIdx) => (
                      <td key={cellIdx}>{String(val)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {tableData.length > 50 && <p>Showing first 50 of {tableData.length} records.</p>}
          </div>
        ) : (
          <p>No data found or failed to load file.</p>
        )}
      </div>
    </div>
  )
}

export default CRLA