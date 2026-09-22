import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import OpcrfLanding from '../../OpcrfLanding'
import snsBackground from '../../../assets/Part-1-A-Curriculum-Teaching/SNS/SNS Background.jpg'
import './SNS.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString()

const SNS_ARCHIVES = {
    sbfpMovs: {
        label: 'SBFP MOVS 1',
        file: '/data/SNS/SBFP MOVS 1.pdf',
    },
    sbfpMilk: {
        label: 'SBFP Milk Form',
        file: '/data/SNS/SBFP-MILK FORM.pdf',
    },
    sbfpNfp: {
        label: 'SBFP NFP Form',
        file: '/data/SNS/SBFP-NFP FORM.pdf',
    },
}

const SNS = () => {
    const viewerRef = useRef(null)
    const [activeArchive, setActiveArchive] = useState('sbfpMovs')
    const [pageWidth, setPageWidth] = useState(1000)
    const [pageCount, setPageCount] = useState(0)
    const archive = SNS_ARCHIVES[activeArchive]

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
            section="Part 1-A / Finance & Resource Management"
            title="Students Nutritional Status"
            description="Review student nutrition records, programs, and evidence."
            backgroundImage={snsBackground}
        >
            <section className="sns-viewer" ref={viewerRef}>
                <div className="sns-viewer-heading">
                    <div>
                        <p className="sns-kicker">Results Archive</p>
                        <h2>School-Based Feeding Program (SBFP) Documents</h2>
                    </div>
                    {pageCount > 0 && <span>{pageCount} pages</span>}
                </div>

                <div className="sns-tabs" role="tablist" aria-label="SNS results archive">
                    {Object.entries(SNS_ARCHIVES).map(([key, item]) => (
                        <button
                            key={key}
                            className={`sns-tab ${activeArchive === key ? 'is-active' : ''}`}
                            role="tab"
                            aria-selected={activeArchive === key}
                            onClick={() => {
                                setActiveArchive(key)
                                setPageCount(0)
                            }}
                        >
                            <span className="sns-tab-icon" aria-hidden="true">▣</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                <Document
                    key={archive.file}
                    file={archive.file}
                    onLoadSuccess={({ numPages }) => setPageCount(numPages)}
                    loading={<p className="sns-status">Loading PDF preview...</p>}
                    error={<p className="sns-status">Unable to load the SNS PDF.</p>}
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

export default SNS