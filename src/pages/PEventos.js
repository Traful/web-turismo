import React, { Component } from "react";
import { Consumer } from "../context";
import Viewer from "../components/subcomponentes/Viewer";
/*
import axios from "axios";
import GoogleMap from "../components/subcomponentes/GoogleMap";
*/

const City = (props) => {
	let estilo = {
		backgroundImage: `url(http://localhost/api-turismo/public/recursos/novedades/${props.data.foto_uno})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover"
	};
	return(
		<div className="City animated zoomIn" style={estilo}>
			<p>#{props.data.id} - {props.data.titulo}</p>
		</div>
	);
}

class PEventos extends Component {
    constructor(props) {
        super(props);
		this.state = {
			loading: true,
			data: [],
			carousel: []
		};
		this.getData = this.getData.bind(this);
    }

	getData() {
		fetch("http://localhost/api-turismo/public/novedades/10", {
		//fetch("http://localhost/api-turismo/public/ciudades", {
            method: "GET",
            headers: {
                "Authorization": "",
            }
        })
        .then(res => res.json())
        .then((result) => {
            if(!result.err) {
				this.setState({
					data: result.data.registros,
					loading: false
				});
            } else {
				console.log(result.errMsg);
            }
        }, (error) => { //???
            console.log(error);
        });
	}

	componentDidMount() {
		this.getData();
	}


    render() {
        const carousel = this.state.carousel;
		const items = this.state.data.map((d) => {
			return(
				<div key={`d-${d.id}`}>
					<City data={d} />
				</div>
			);
		});
        return (
            <div className="PEventos">
                {
                    this.state.loading ?
                    <div>Cargando...</div>
                    :
                    <React.Fragment>
                        <div className="menu-y-slider">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {carousel}
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                                <div className="slider-home-leyenda">
                                    <h1 className="mb-5">Calendario de Eventos</h1>
                                </div>
                            </div>
                        </div>




                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    Calendario Picker
                                </div>
                            </div>

                            <Viewer visibles="3">
								{items}
							</Viewer>
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

PEventos.contextType = Consumer;

export default PEventos;