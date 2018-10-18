import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import axios from "axios";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import Menu from "../components/Menu";
import LocAlojamiento from "../components/subcomponentes/LocAlojamiento";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: parseFloat(props.lat, 10), lng: parseFloat(props.lon, 10) }}
  >
    {props.isMarkerShown && <Marker position={{ lat: parseFloat(props.lat, 10), lng: parseFloat(props.lon, 10) }} />}
  </GoogleMap>
));
    

//<MyMapComponent isMarkerShown />// Map with a Marker
//<MyMapComponent isMarkerShown={false} />// Just only Map

class PLocalidad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataLocalidad: null
        };
    }
    
    componentDidMount() {
        var self = this;
        axios({
            method: "get",
            headers: {
                "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Mzk1MzMxMTEsImV4cCI6MTUzOTU2MTkxMSwianRpIjoiPz8_Iiwic3ViIjoiPz8_Iiwic2NvcGUiOnsiaWQiOiIxIiwicGVybWlzb3MiOnsiR0VUIjoiMSIsIlBPU1QiOiIxIiwiUFVUIjoiMSIsIlBBVENIIjoiMSIsIkRFTEVURSI6IjEifSwiaWR0aXBvIjoiMSJ9fQ.EgXE6dMUwinCs-X5QoYdI3YTXjoVZk62j43PHu5w6sk'
            },
            url: `${process.env.REACT_APP_API}/ciudad/${this.props.match.params.id}`,
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
                    dataLocalidad: response.data.data.registros[0]
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
        return (
            <div className="Localidad">
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
                                    <h1 className="mb-5">Destino Turístico</h1>
                                </div>
                            </div>
                            <Menu />
                        </div>
                        <div className="ZonaLocalidad-titulo" style={{backgroundColor: `#${this.state.dataLocalidad.color}`}}>
                            <h3 style={{color: `#${this.state.dataLocalidad.color}`}}>{this.state.dataLocalidad.nombre}</h3>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col ZonaLocalidad-Body">
                                    <div id="video">
                                        <iframe title={`#${this.state.dataLocalidad.id}-${this.state.dataLocalidad.nombre}`} src={this.state.dataLocalidad.video} width="100%" height="315" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                    <div id="texto"><p>{this.state.dataLocalidad.descripcion}</p></div>
                                    <div id="mapa">
                                        <MyMapComponent
                                            isMarkerShown
                                            googleMapURL="//maps.googleapis.com/maps/api/js?key=AIzaSyCt5PFk10D5qCsCRfmzvusWFhe6MHq9t-Y"
                                            loadingElement={<div style={{ height: `100%` }} />}
                                            containerElement={<div style={{ height: `400px` }} />}
                                            mapElement={<div style={{ height: `100%` }} />}
                                            lat={this.state.dataLocalidad.latitud}
                                            lon={this.state.dataLocalidad.longitud}
                                        />
                                    </div>
                                    <div id="imperdibles">Imperdibles</div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <LocAlojamiento id={this.props.match.params.id} />
                                </div>
                            </div>
                        </div>
                        <div>
                            Localidad: {this.props.match.params.id}
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}
//googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
export default PLocalidad;