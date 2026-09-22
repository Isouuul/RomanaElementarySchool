import OpcrfLanding from '../../OpcrfLanding'
import { useMemo, useState } from 'react'
import OPCRFViewer from '../../2xlsx/OPCRFViewer'
import rmaBackground from '../../../assets/Part-1-A-Curriculum-Teaching/RMA/RMA.png'
import './RMA.css'

const ARCHIVES = {
    BOSY: {
        label: 'Beginning of School Year',
        groups: {
            'All Results': [
                ['School Summary - KS1', '/data/RMA/BOSY%20RMA%20RESULTS/RES_RMA_KS1_BOSY_SchoolSummary.xlsx'],
                ['School Summary - KS2', '/data/RMA/BOSY%20RMA%20RESULTS/RES_RMA_KS2_BoSYSchoolSummaryv1.xlsx'],
            ],
            KS1: [
                ['Grade 1 Scoresheet', '/data/RMA/BOSY%20RMA%20RESULTS/RMA2_G1Scoresheet_v2%20s.y.%2025-26.xlsx'],
                ['Grade 2 Scoresheet', '/data/RMA/BOSY%20RMA%20RESULTS/RMA2_G2Scoresheet_v2.xlsx'],
                ['Grade 3 Scoresheet', '/data/RMA/BOSY%20RMA%20RESULTS/RMA2_G3Scoresheet_v2.xlsx'],
            ],
            KS2: [
                ['Grade 4 Scoresheet', '/data/RMA/BOSY%20RMA%20RESULTS/RMA_G4KS2-BoSYScoresheetv1.xlsx'],
                ['Grade 5 Scoresheet', '/data/RMA/BOSY%20RMA%20RESULTS/RMA_G5KS2-BoSYScoresheet.xlsx'],
                ['Grade 6 Scoresheet', '/data/RMA/BOSY%20RMA%20RESULTS/RMA_G6KS2-BoSYScoresheet.xlsx'],
            ],
        },
    },
    EOSY: {
        label: 'End of School Year',
        groups: {
            'All Results': [
                ['School Summary - KS1', '/data/RMA/EOSY%20RMA%20RESULTS/KS1/EOSY%20RMA2_SchoolSummary_v4b.xlsx'],
                ['School Summary - KS2', '/data/RMA/EOSY%20RMA%20RESULTS/KS2/Copy%20of%20RMA_KS2SchoolSummaryv4.xlsx'],
            ],
            KS1: [
                ['Grade 1 Scoresheet', '/data/RMA/EOSY%20RMA%20RESULTS/KS1/RMA2_G1Scoresheet_v4_G1.xlsx'],
                ['Grade 2 Scoresheet', '/data/RMA/EOSY%20RMA%20RESULTS/KS1/EOSY%20RMA2_G2Scoresheet_v4_G2.xlsx'],
                ['Grade 3 Scoresheet', '/data/RMA/EOSY%20RMA%20RESULTS/KS1/RMA2_G3Scoresheet_v4_G3.xlsx'],
            ],
            KS2: [
                ['Grade 4 Scoresheet', '/data/RMA/EOSY%20RMA%20RESULTS/KS2/RMA_KS2-Scoresheetv%204b%20GRADE%20IV.xlsx'],
                ['Grade 5 Scoresheet', '/data/RMA/EOSY%20RMA%20RESULTS/KS2/RMA_KS2-Scoresheetv%204b%20GRADE%20V.xlsx'],
                ['Grade 6 Scoresheet', '/data/RMA/EOSY%20RMA%20RESULTS/KS2/RMA_KS2-Scoresheetv%204b%20GRADE%20VI.xlsx'],
            ],
        },
    },
}

const RMA = () => {
    const [activePeriod, setActivePeriod] = useState('BOSY')
    const [activeGroup, setActiveGroup] = useState('All Results')
    const [selectedFile, setSelectedFile] = useState(null)
    const archive = ARCHIVES[activePeriod]
    const files = useMemo(() => archive.groups[activeGroup], [archive, activeGroup])

    const changePeriod = (period) => {
        setActivePeriod(period)
        setActiveGroup('All Results')
        setSelectedFile(null)
    }

    return (
        <OpcrfLanding 
            section="Part 1-A / Curriculum & Teaching" 
            title="RMA" 
            description="Rapid Mathematics Assessment results archive for every key stage and school-year checkpoint."
            backgroundImage={rmaBackground}
        >
            <section className="rma-page">
                <div className="rma-intro">
                    <div>
                        <p className="rma-kicker">Assessment archive</p>
                        <h2>Measure progress. Find the next step.</h2>
                        <p>Browse RMA results by school-year checkpoint and key stage, then open any workbook for a full preview.</p>
                    </div>
                    <div className="rma-stat"><strong>16</strong><span>workbooks</span></div>
                </div>

                <div className="rma-period-tabs" role="tablist" aria-label="RMA periods">
                    {Object.entries(ARCHIVES).map(([key, item]) => (
                        <button key={key} className={activePeriod === key ? 'is-active' : ''} onClick={() => changePeriod(key)} role="tab" aria-selected={activePeriod === key}>
                            <span>{key === 'BOSY' ? '↗' : '↘'}</span>{item.label}
                        </button>
                    ))}
                </div>

                <div className="rma-group-tabs">
                    {Object.keys(archive.groups).map((group) => (
                        <button key={group} className={activeGroup === group ? 'is-active' : ''} onClick={() => { setActiveGroup(group); setSelectedFile(null) }}>{group}</button>
                    ))}
                </div>

                <div className="rma-file-grid">
                    {files.map(([label, file]) => (
                        <button key={file} className={`rma-file-card ${selectedFile?.file === file ? 'is-selected' : ''}`} onClick={() => setSelectedFile({ label, file })}>
                            <span className="rma-file-icon">XLSX</span>
                            <span><strong>{label}</strong><small>{archive.label} / {activeGroup}</small></span>
                            <span className="rma-open">Open →</span>
                        </button>
                    ))}
                </div>

                {selectedFile ? <OPCRFViewer title={selectedFile.label} file={selectedFile.file} /> : <div className="rma-empty">Select a result card to preview its workbook.</div>}
            </section>
        </OpcrfLanding>
    )
}

export default RMA