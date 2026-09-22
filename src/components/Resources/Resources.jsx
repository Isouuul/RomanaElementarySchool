import './Resources.css'

const Resources = ({ page = 'resources' }) => {
	const isIssuancesPage = page === 'issuances'

	return (
		<section className="page-container">
			<div className="page-header">
				<p className="page-kicker">Romana Elementary School</p>
				<h1>{isIssuancesPage ? 'Issuances' : 'Resources'}</h1>
				<p>{isIssuancesPage ? 'Access school policies, memoranda, and official issuances.' : 'A central place for school forms, references, and helpful links.'}</p>
			</div>
			<div className="resource-list">
				<a className="resource-item" href="#opcrf-2025-2026">
					<span className="resource-type">XLS</span>
					<span>
						<strong>OPCRF 2025-2026 Final</strong>
						<small>Official performance commitment and review form</small>
					</span>
				</a>
				<a className="resource-item" href="#opcrf-res-draft">
					<span className="resource-type">XLS</span>
					<span>
						<strong>OPCRF RES Final Draft</strong>
						<small>Romana Elementary School working copy</small>
					</span>
				</a>
			</div>
		</section>
	)
}

export default Resources
