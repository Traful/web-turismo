import React, { Component } from 'react';
//import { Link } from "react-router-dom";
//import axios from "axios";
/*
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: parseFloat(props.lat, 10), lng: parseFloat(props.lon, 10) }}
  >
    {props.isMarkerShown && <Marker position={{ lat: parseFloat(props.lat, 10), lng: parseFloat(props.lon, 10) }} />}
  </GoogleMap>
));
*/

import Menu from "../components/Menu";
import atractivosData from '../data/atractivos';

class PAtractivo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dato: {
                fotos: [],
                horarios: []
            }
        };
    }
    
    componentDidMount() {
        var dato = atractivosData.filter((a, index) => {
            if(parseInt(a.id, 10) === parseInt(this.props.match.params.id, 10)) {
                return true;
            } else {
                return false;
            }
        });
        dato = dato[0];
        //Carousel
        var activo = false;
        var fotos = [];
        if(dato.fotos.length > 0) {
            fotos = dato.fotos.map((f, index) => {
                let estilo = {
                    backgroundImage: `url(${process.env.REACT_APP_API_RECURSOS}/atractivos/${f})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                };
                if(!activo) {
                    activo = true;
                    return (
                        <div key={`caro-${f}-${index}`} className="carousel-item active" style={estilo}></div>
                    );
                } else {
                    return (
                        <div key={`caro-${f}-${index}`} className="carousel-item" style={estilo}></div>
                    );
                }
            });
        }
        this.setState({
            carousel: fotos,
            dato: dato,
            loading: false
        });
    }

    render() {
        const atractivo_fotos = this.state.dato.fotos.map((f, index) => {
            return <img key={`img-${index}`} src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${f}`} alt="foto" />
        });
        var buffer_horarios = [];
        for(var key in this.state.dato.horarios){
            buffer_horarios.push(`${key}: ${this.state.dato.horarios[key]}`);
        }
        const atractivo_horarios = buffer_horarios.map((f, index) => {
            return <li key={`hor-${index}`}>{f}</li>;
        });
        return (
            <div className="Atractivo">
                {
                    this.state.loading ?
                    <div>Cargando...</div>
                    :
                    <React.Fragment>
                        <div className="menu-y-slider">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {this.state.carousel}
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
                                    <h1 className="mb-5">Atractivo Turístico</h1>
                                </div>
                            </div>
                            <Menu />
                        </div>
                        <div className="ZonaLocalidad-titulo">
                            <h3>{this.state.dato.nombre}</h3>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="Atractivo-data">
                                        <div className="atractivo-texto">{this.state.dato.descripcion}
                                        </div>
                                        <div className="atractivo-fotos">
                                            {atractivo_fotos}
                                        </div>
                                        <div className="atractivo-info">
                                            <span><i className="fas fa-map-marker"></i> Ubicacion</span>
                                            <span>{this.state.dato.localidad}</span>
                                            <span>{this.state.dato.latitud} {this.state.dato.longitud}</span>
                                            <span><i className="fas fa-clock"></i> Horarios</span>
                                            <ul>
                                                {atractivo_horarios}
                                            </ul>
                                            <span><i className="fas fa-dollar-sign"></i> Cósto: $0</span>
                                            <span><i className="fas fa-user"></i> Contacto</span>
                                            <span className="pr-4">Domicilio: {this.state.dato.domicilio}</span>
                                            <span className="pr-4">Tel./Cel.: +54 9 {this.state.dato.telefono}</span>
                                            <span className="pr-4">Email: {this.state.dato.mail}</span>
                                            <span className="pr-4">Web: {this.state.dato.web}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            Atractivo: {this.props.match.params.id}
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default PAtractivo;