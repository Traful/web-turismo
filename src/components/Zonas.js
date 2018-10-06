import React, { Component } from 'react';

class Zonas extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="Zonas">
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
}

export default Zonas;