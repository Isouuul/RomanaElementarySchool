import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import OpcrfLanding from '../../OpcrfLanding'
import philIriBackground from '../../../assets/Part-1-A-Curriculum-Teaching/PHIL-IRI/Phil-iri.png'
import './PHIL-IRI.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url,
).toString()

const PHIL_IRI_ARCHIVES = {
	beginning: {
		label: 'Beginning of School Year (BoSY)',
		file: '/data/CRLA/Phil-iri/Beginning-Result.pdf',
	},
	ending: {
		label: 'End of School Year (EoSY)',
		file: '/data/CRLA/Phil-iri/Ending-Result.pdf',
	},
}

const PHILIRI = () => {
	const viewerRef = useRef(null)
	const [activeArchive, setActiveArchive] = useState('beginning')
	const [pageWidth, setPageWidth] = useState(1000)
	const [pageCount, setPageCount] = useState(0)
	const archive = PHIL_IRI_ARCHIVES[activeArchive]

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
			section="Part 1-A / Curriculum & Teaching"
			title="PHIL-IRI"
			description="Access the Philippine Informal Reading Inventory workspace."
			backgroundImage={philIriBackground}
		>
			<section className="phil-iri-viewer" ref={viewerRef}>
				<div className="phil-iri-viewer-heading">
					<div>
						<p className="phil-iri-kicker">Results Archive</p>
						<h2>Phil-IRI Elementary Schools Results Archive</h2>
					</div>
					{pageCount > 0 && <span>{pageCount} pages</span>}
				</div>

				<div className="phil-iri-tabs" role="tablist" aria-label="PHIL-IRI results archive">
					{Object.entries(PHIL_IRI_ARCHIVES).map(([key, item]) => (
						<button
							key={key}
							className={`phil-iri-tab ${activeArchive === key ? 'is-active' : ''}`}
							role="tab"
							aria-selected={activeArchive === key}
							onClick={() => {
								setActiveArchive(key)
								setPageCount(0)
							}}
						>
							<span className="phil-iri-tab-icon" aria-hidden="true">▣</span>
							<span>{item.label}</span>
						</button>
					))}
				</div>

				<Document
					key={archive.file}
					file={archive.file}
					onLoadSuccess={({ numPages }) => setPageCount(numPages)}
					loading={<p className="phil-iri-status">Loading PDF preview...</p>}
					error={<p className="phil-iri-status">Unable to load the PHIL-IRI PDF.</p>}
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

export default PHILIRI
