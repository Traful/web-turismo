import React, { Component } from 'react';
import axios from "axios";

const DataZona = (props) => {
    console.log()
    return(
        <div className="ZonaMenu-Item" style={{"backgroundColor": `#${props.data.color}`}}>
            <img src={props.data.foto} alt="Img" />
            <span>{props.data.nombre}</span>
        </div>
    );
}

class ZonasMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
            dataZonas: [
                {nombre: "Sierras Centrales", color: "#cb6120", foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`},
                {nombre: "Norte Puntano", color: "#a2bd31", foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`},
                {nombre: "Costa de los Comechingones", color: "#326534", foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`},
                {nombre: "Valle del Conlara y San Martín", color: "#bf3276", foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`},
                {nombre: "Villa Mercedes y El Morro", color: "#e5b449", foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`},
                {nombre: "Huellas del Pasado", color: "#a01127", foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`},
                {nombre: "Llanura Sureña", color: "#618dc5", foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`},
                {nombre: "Termas y Salinas", color: "#5ea099", foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`}
            ]
            */
           dataZonas: []
        }
    }

    componentWillMount() {
        var self = this;
        axios({
            method: "get",
            headers: {
                "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Mzk1MzMxMTEsImV4cCI6MTUzOTU2MTkxMSwianRpIjoiPz8_Iiwic3ViIjoiPz8_Iiwic2NvcGUiOnsiaWQiOiIxIiwicGVybWlzb3MiOnsiR0VUIjoiMSIsIlBPU1QiOiIxIiwiUFVUIjoiMSIsIlBBVENIIjoiMSIsIkRFTEVURSI6IjEifSwiaWR0aXBvIjoiMSJ9fQ.EgXE6dMUwinCs-X5QoYdI3YTXjoVZk62j43PHu5w6sk'
            },
            url: `${process.env.REACT_APP_API}/zonas`,
            /*
            auth: {
                username: 'janedoe',
                password: 's00pers3cret'
            },
            */
            responseType: 'json'
        })
        .then((response) => {
            self.setState({
                dataZonas: response.data.data.registros
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const dzonas = this.state.dataZonas.map((zona) => {
            return <DataZona key={`zona-${zona.id}`} data={zona} />
        });
        return (
            <div className="ZonasMenu">
                <div className="ZonaMenu-Zonas">
                    <h4>Zonas Turísticas</h4>
                    <div className="ZonaMenu-Data">
                        {dzonas}
                    </div>
                </div>
                <div className="ZonaMenu-Lista">
                    <h4>Destinos</h4>
                    <ul>
                        <li><a href="" className="link">Ciudad de San Luis</a></li>
                        <li><a href="" className="link">Villa Mercedes</a></li>
                        <li><a href="" className="link">Villa de Merlo</a></li>
                        <li><a href="" className="link">Potrero de los Funes</a></li>
                        <li><a href="" className="link">San Francisco</a></li>
                        <li><a href="" className="link">El Trapiche</a></li>
                        <li><a href="" className="link">Carpintería</a></li>
                        <li><a href="" className="link">La Carolina</a></li>
                        <li><a href="" className="link">Nogolí</a></li>
                        <li><a href="" className="link">San Jerónimo</a></li>
                        <li><a href="" className="link">La Punta</a></li>
                        <li><a href="" className="link">Los Molles</a></li>
                        <li><a href="" className="link">Justo Daract</a></li>
                        <li><a href="" className="link">Balde</a></li>
                        <li><a href="" className="link">Nueva Galia</a></li>
                    </ul>
                </div>
            </div>
        );
    }

    /*
    render() {
        return (
            <div className="ZonasMenu">
                <div>
                    <div>Zonas</div>
                    <div className="zonas-data">
                        <div>
                            <div className="media-zone" style={{"backgroundColor": this.state.dataZonas[0].color}}>
                                <img src={this.state.dataZonas[0].foto} alt="Img" />
                                <span>{this.state.dataZonas[0].nombre}</span>
                            </div>
                            <div className="media-zone" style={{"backgroundColor": this.state.dataZonas[1].color}}>
                                <img src={this.state.dataZonas[1].foto} alt="Img" />
                                <span>{this.state.dataZonas[1].nombre}</span>
                            </div>
                            <div className="media-zone" style={{"backgroundColor": this.state.dataZonas[2].color}}>
                                <img src={this.state.dataZonas[2].foto} alt="Img" />
                                <span>{this.state.dataZonas[2].nombre}</span>
                            </div>
                            <div className="media-zone" style={{"backgroundColor": this.state.dataZonas[3].color}}>
                                <img src={this.state.dataZonas[3].foto} alt="Img" />
                                <span>{this.state.dataZonas[3].nombre}</span>
                            </div>
                        </div>
                        <div>
                            <div className="media-zone" style={{"backgroundColor": this.state.dataZonas[4].color}}>
                                <img src={this.state.dataZonas[4].foto} alt="Img" />
                                <span>{this.state.dataZonas[4].nombre}</span>
                            </div>
                            <div className="media-zone" style={{"backgroundColor": this.state.dataZonas[5].color}}>
                                <img src={this.state.dataZonas[5].foto} alt="Img" />
                                <span>{this.state.dataZonas[5].nombre}</span>
                            </div>
                            <div className="media-zone" style={{"backgroundColor": this.state.dataZonas[6].color}}>
                                <img src={this.state.dataZonas[6].foto} alt="Img" />
                                <span>{this.state.dataZonas[6].nombre}</span>
                            </div>
                            <div className="media-zone" style={{"backgroundColor": this.state.dataZonas[7].color}}>
                                <img src={this.state.dataZonas[7].foto} alt="Img" />
                                <span>{this.state.dataZonas[7].nombre}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Zonas</div>
                    <div>
                        <ul>
                            <li><a href="#">Uno</a></li>
                            <li><a href="#">Dos</a></li>
                            <li><a href="#">Tres</a></li>
                            <li><a href="#">Cuatro</a></li>
                            <li><a href="#">Cinco</a></li>
                        </ul>
                    </div>
                </div>
               
            </div>
        );
    }
    */
}

export default ZonasMenu;