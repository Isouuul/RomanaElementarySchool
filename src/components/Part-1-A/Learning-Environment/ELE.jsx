import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import OpcrfLanding from '../../OpcrfLanding'
import eleBackground from '../../../assets/Learning Environment/ELE-poster.png'
import './ELE.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString()

const ELE_ARCHIVES = [
    {
        key: 'plans',
        label: '2026 School Plans',
        file: '/data/Enhance%20of%20Learning%20Environment/2026%20Plans%20-%20Revised%20as%20of%20June%202026.pdf',
    },
    {
        key: 'ppmp',
        label: 'WFP / PPMP / APP',
        file: '/data/Enhance%20of%20Learning%20Environment/2025%20-%20WFP.ITMEIZED.PPMP.pdf',
    },
    {
        key: 'before-after',
        label: 'Before & After Photos',
        file: '/data/Enhance%20of%20Learning%20Environment/BEFORE%20AND%20AFTER%20PICS.pdf',
    },
    {
        key: 'repainting',
        label: 'Repainting Works',
        file: '/data/Enhance%20of%20Learning%20Environment/POW-REPAINTING.pdf',
    },
    {
        key: 'rewiring',
        label: 'Rewiring Works',
        file: '/data/Enhance%20of%20Learning%20Environment/POW-REWIRING.pdf',
    },
]

const ELE = () => {
    const viewerRef = useRef(null)
    const [activeArchive, setActiveArchive] = useState(ELE_ARCHIVES[0].key)
    const [pageWidth, setPageWidth] = useState(1000)
    const [pageCount, setPageCount] = useState(0)
    const archive = ELE_ARCHIVES.find((item) => item.key === activeArchive) ?? ELE_ARCHIVES[0]

    useEffect(() => {
        if (!viewerRef.current) return undefined

        const updateWidth = () => setPageWidth(Math.max(280, viewerRef.current.clientWidth - 32))
        const observer = new ResizeObserver(updateWidth)
        observer.observe(viewerRef.current)
        updateWidth()

        return () => observer.disconnect()
    }, [])

    return (
        <OpcrfLanding
            section="Part 1-A / Learning Environment"
            title="Enhancement of Learning Environment"
            description="Review programs and evidence that strengthen the learning environment."
            backgroundImage={eleBackground}
        >
            <section className="ele-viewer" ref={viewerRef}>
                <div className="ele-viewer-heading">
                    <div>
                        <p className="ele-kicker">Results Archive</p>
                        <h2>Enhancement of Learning Environment Documents</h2>
                    </div>
                    {pageCount > 0 && <span>{pageCount} pages</span>}
                </div>

                <div className="ele-tabs" role="tablist" aria-label="ELE results archive">
                    {ELE_ARCHIVES.map((item) => (
                        <button
                            key={item.key}
                            className={`ele-tab ${activeArchive === item.key ? 'is-active' : ''}`}
                            role="tab"
                            aria-selected={activeArchive === item.key}
                            onClick={() => {
                                setActiveArchive(item.key)
                                setPageCount(0)
                            }}
                        >
                            <span className="ele-tab-icon" aria-hidden="true">▣</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                <Document
                    key={archive.file}
                    file={archive.file}
                    onLoadSuccess={({ numPages }) => setPageCount(numPages)}
                    loading={<p className="ele-status">Loading PDF preview...</p>}
                    error={<p className="ele-status">Unable to load the selected ELE document.</p>}
                >
                    {Array.from({ length: pageCount }, (_, index) => (
                        <Page
                            key={`page-${index + 1}`}
                            pageNumber={index + 1}
                            width={pageWidth}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    ))}
                </Document>
            </section>
        </OpcrfLanding>
    )
}

export default ELE