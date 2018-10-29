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
					<p><a href="tel:+549266442379">(266) 4423479</a></p>
					<p><a href="tel:+549266442357">(266) 4423957</a></p>
					<p>San Luis, Capital</p>
				</div>
				<div className="social">
					<h3>Seguinos</h3>
					<p><i className="fab fa-facebook-square"></i> <a href="https://www.facebook.com/turismodesanluis/" target="_blank" rel="noopener noreferrer">Ministerio de Turismo San Luis</a></p>
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