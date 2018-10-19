import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<div className="logom">
					<img className="img-fluid" src={`${process.env.REACT_APP_API_RECURSOS}/recursos/primavera-sl.png`} alt="Primavera San Luis" />
				</div>
				<div className="ministerio">
					<h3>Ministerio de Turismo</h3>
					<p>Av. Illia 35, esq. Junín</p>
					<p>(0266) 4423479 / 4423957</p>
					<p>San Luis, Capital</p>
				</div>
				<div className="social">
					<h3>Seguinos</h3>
					<p>Ministerio de Turismo San Luis</p>
					<p>Turismo San Luis</p>
					<p>@MintuSLU</p>
					<p>Ministeariotursl</p>
				</div>
				<div className="institucional">
					<img className="img-fluid" src={`${process.env.REACT_APP_API_RECURSOS}/recursos/institucional.png`} alt="San Luis Nos Une" />
				</div>
			</div>
		);
	}
}

export default Footer;