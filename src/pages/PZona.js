import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import Menu from "../components/Menu";

class Zona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataZona: {},
            localidadesDataZona: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        /*
        if(prevProps == undefined) {
        return false
        }
        if (this.state.id != this.props.router.params.id) {
        this.props.dispatch(fetchProject(this.props.router.params.id))
        this.setState({id: this.props.router.params.id})
        }
        */

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
            console.log(response);
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
                                    <div className="carousel-item img-slider-1 active"></div>
                                    <div className="carousel-item img-slider-2"></div>
                                    <div className="carousel-item img-slider-3"></div>
                                    <div className="carousel-item img-slider-4"></div>
                                    <div className="carousel-item img-slider-5"></div>
                                    <div className="carousel-item img-slider-6"></div>
                                    <div className="carousel-item img-slider-7"></div>
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