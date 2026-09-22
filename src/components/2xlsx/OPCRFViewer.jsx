import { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import './OPCRF.css'

const OPCRFViewer = ({ file, title }) => {
  const [workbook, setWorkbook] = useState(null)
  const [activeSheet, setActiveSheet] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    const loadWorkbook = async () => {
      setLoading(true)
      setError('')
      try {
        const response = await fetch(file)
        if (!response.ok) throw new Error('Workbook could not be loaded.')

        const data = await response.arrayBuffer()
        const loadedWorkbook = XLSX.read(data, { type: 'array' })
        if (cancelled) return

        setWorkbook(loadedWorkbook)
        setActiveSheet(loadedWorkbook.SheetNames[0] || '')
      } catch (loadError) {
        if (!cancelled) {
          setWorkbook(null)
          setError(loadError.message)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadWorkbook()
    return () => {
      cancelled = true
    }
  }, [file])

  const rows = workbook && activeSheet
    ? XLSX.utils.sheet_to_json(workbook.Sheets[activeSheet], { header: 1, defval: '' }).slice(0, 100)
    : []
  const columns = rows.reduce((maximum, row) => Math.max(maximum, row.length), 0)

  return (
    <section className="opcrf-workbook">
      <header className="opcrf-workbook-header">
        <div>
          <p className="opcrf-workbook-kicker">OPCRF Workbook</p>
          <h1>{title}</h1>
          <p>Preview the workbook directly in the portal.</p>
        </div>
        {!loading && workbook && <span>{workbook.SheetNames.length} sheets</span>}
      </header>

      {loading && <p className="opcrf-workbook-status">Loading workbook...</p>}
      {error && <p className="opcrf-workbook-status is-error">{error}</p>}

      {!loading && workbook && (
        <>
          <nav className="opcrf-sheet-tabs" aria-label="Workbook sheets">
            {workbook.SheetNames.map((sheetName) => (
              <button
                key={sheetName}
                className={activeSheet === sheetName ? 'is-active' : ''}
                onClick={() => setActiveSheet(sheetName)}
              >
                {sheetName}
              </button>
            ))}
          </nav>
          <div className="opcrf-table-wrap">
            {rows.length > 0 ? (
              <table>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Array.from({ length: columns }, (_, columnIndex) => (
                        <td key={columnIndex}>{String(row[columnIndex] ?? '')}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="opcrf-workbook-status">This sheet has no visible rows.</p>
            )}
          </div>
          <p className="opcrf-workbook-note">Showing up to the first 100 rows of the selected sheet.</p>
        </>
      )}
    </section>
  )
}

export default OPCRFViewer
