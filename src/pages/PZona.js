import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import atractivosData from '../data/atractivos';

import Menu from "../components/Menu";

class Zona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataZona: {},
            localidadesDataZona: [],
            carousel: [],
            atractivos: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.componentDidMount();
        }
    }

    componentDidMount() {
        //verificar que el id se aun número > a 0
        //Datos de la Zona
        var self = this;
        axios({
            method: "get",
            headers: {
                "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Mzk1MzMxMTEsImV4cCI6MTUzOTU2MTkxMSwianRpIjoiPz8_Iiwic3ViIjoiPz8_Iiwic2NvcGUiOnsiaWQiOiIxIiwicGVybWlzb3MiOnsiR0VUIjoiMSIsIlBPU1QiOiIxIiwiUFVUIjoiMSIsIlBBVENIIjoiMSIsIkRFTEVURSI6IjEifSwiaWR0aXBvIjoiMSJ9fQ.EgXE6dMUwinCs-X5QoYdI3YTXjoVZk62j43PHu5w6sk'
            },
            url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}`,
            /*
            auth: {
                username: 'janedoe',
                password: 's00pers3cret'
            },
            */
            responseType: 'json'
        })
        .then((response) => {
            if(response.data.data.count > 0) {
                self.setState({
                    dataZona: response.data.data.registros[0]
                });
            } else {
                //Error no se enocntró el id
            }
            this.setState({loading: false});
        })
        .catch((error) => {
            console.log(error);
            this.setState({loading: false});
        });
        //Localidades de la Zona
        axios({
            method: "get",
            headers: {
                "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Mzk1MzMxMTEsImV4cCI6MTUzOTU2MTkxMSwianRpIjoiPz8_Iiwic3ViIjoiPz8_Iiwic2NvcGUiOnsiaWQiOiIxIiwicGVybWlzb3MiOnsiR0VUIjoiMSIsIlBPU1QiOiIxIiwiUFVUIjoiMSIsIlBBVENIIjoiMSIsIkRFTEVURSI6IjEifSwiaWR0aXBvIjoiMSJ9fQ.EgXE6dMUwinCs-X5QoYdI3YTXjoVZk62j43PHu5w6sk'
            },
            url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}/ciudades`,
            /*
            auth: {
                username: 'janedoe',
                password: 's00pers3cret'
            },
            */
            responseType: 'json'
        })
        .then((response) => {
            if(response.data.data.count > 0) {
                self.setState({
                    localidadesDataZona: response.data.data.registros
                }, () => {
                    /*
                    console.log(self.state.localidadesDataZona);
                    //Atractivos de la Zona
                    var atractivos = atractivosData.map((a) => {
                        if(self.state.localidadesDataZona.filter((l) => {
                            return parseInt(l.idciudad, 10) === parseInt(a.id, 10);
                        }).length > 0) {
                            return (a.nombre);
                        } else {
                            return null;
                        }
                    });
                    console.log(atractivos);
                    */
                    //1 Foto de cada atractivo para el carousel
                    console.log(atractivosData);
                    var activo = false;
                    var fotos = atractivosData.map((a, index) => {
                        if(a.fotos.length > 0) {
                            /*
                            let index_foto = Math.random() * (a.fotos.length - 0) + 0; // Retorna un número aleatorio entre min (incluido) y max (excluido)
                            console.log(index_foto);
                            */
                            let estilo = {
                                backgroundImage: `url(${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.fotos[0]})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            };
                            if(!activo) {
                                activo = true;
                                return (
                                    <div key={`caro-${a.id}-${index}`} className="carousel-item active" style={estilo}></div>
                                );
                            } else {
                                return (
                                    <div key={`caro-${a.id}-${index}`} className="carousel-item" style={estilo}></div>
                                );
                            }
                        } else {
                            return null;
                        }
                    });
                    self.setState({carousel: fotos});
                });
            } else {
                //Error no se enocntró el id
            }
            this.setState({loading: false});
        })
        .catch((error) => {
            console.log(error);
            this.setState({loading: false});
        });
    }

    render() {
        //console.log(atractivosData);
        const localidades = this.state.localidadesDataZona.map((localidad) => {
            return (<Link to={`/localidad/${localidad.idciudad}`} key={`localidad-${localidad.id}`}>{localidad.ciudad} / </Link>);
        });
        return (
            <div className="Zona">
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
                                    <h1 className="mb-5">Zona Turística</h1>
                                </div>
                            </div>
                            <Menu />
                        </div>
                        <div className="ZonaDetalle-titulo" style={{backgroundColor: `#${this.state.dataZona.color}`}}>
                            <h3 style={{color: `#${this.state.dataZona.color}`}}>{this.state.dataZona.nombre}</h3>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col ZonaDetalle-Body">
                                    <div id="mapasl">
                                        <img className="img-fluid" src={`${process.env.REACT_APP_API_RECURSOS}/mapas/mini/${this.state.dataZona.mini}`} alt="SL" />
                                    </div>
                                    <div id="texto">
                                        <p>{this.state.dataZona.descripcion}</p>
                                        <div>
                                            <h5 style={{color: `#${this.state.dataZona.color}`}}>Localidades de</h5>
                                            <h4 style={{color: `#${this.state.dataZona.color}`}}>{this.state.dataZona.nombre}</h4>
                                        </div>
                                        <div>
                                            <div>
                                                {localidades}
                                            </div>
                                            <div><button className="btn btn-block mt-3 text-white" style={{backgroundColor: `#${this.state.dataZona.color}`}}><i className="fas fa-file-pdf"></i> Descargar Folletería</button></div>
                                        </div>
                                    </div>
                                    <div id="mapa">
                                        <img className="img-fluid" src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`} alt="Mapa" />
                                    </div>
                                    <div id="imagenes">
                                        <img className="img-fluid" style={{borderColor: `#${this.state.dataZona.color}`}} src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`} alt="Thubmail" />
                                        <img className="img-fluid" style={{borderColor: `#${this.state.dataZona.color}`}} src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`} alt="Thubmail" />
                                        <img className="img-fluid" style={{borderColor: `#${this.state.dataZona.color}`}} src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`} alt="Thubmail" />
                                        <img className="img-fluid" style={{borderColor: `#${this.state.dataZona.color}`}} src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`} alt="Thubmail" />
                                        <img className="img-fluid" style={{borderColor: `#${this.state.dataZona.color}`}} src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`} alt="Thubmail" />
                                        <img className="img-fluid" style={{borderColor: `#${this.state.dataZona.color}`}} src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`} alt="Thubmail" />
                                        <img className="img-fluid" style={{borderColor: `#${this.state.dataZona.color}`}} src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`} alt="Thubmail" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default Zona;