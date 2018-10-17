import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Recorridos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    render() {
        
        return (
            <div className="Recorridos">
                <div className="reco-leyenda">
                    <p className="reco-l-sub1">LA MEJOR MANERA DE VIVIR SAN LUIS</p>
                    <p className="reco-l-sub2">ES CONVERTIRNOS EN PARTE DE ELLA.</p>
                </div>
                <div className="reco-titulo">
                    <span className="reco-t-sub1">Recorremos</span>
                    <span className="reco-t-sub2">Zonas Turísticas</span>
                </div>
                <div className="reco-container">
                    <Link to="zona/4">
                        <div id="sierras">
                            <div className="cuadro-color"></div>
                            <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/sierras.jpg`} className="thumbnail" alt="" />
                            <div className="cuadro-titulo">
                                <p>Sierras</p>
                                <p>Centrales</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="zona/5">
                        <div id="norte">
                            <div className="cuadro-color"></div>
                            <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/norte.jpg`} className="thumbnail" alt="" />
                            <div className="cuadro-titulo">
                                <p>Norte</p>
                                <p>Puntano</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="zona/8">
                        <div id="costa">
                            <div className="cuadro-color"></div>
                            <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/costa.jpg`} className="thumbnail" alt="" />
                            <div className="cuadro-titulo">
                                <p>Costa de los</p>
                                <p>Comechingones</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="zona/1">
                        <div id="valle">
                            <div className="cuadro-color"></div>
                            <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/valle.jpg`} className="thumbnail" alt="" />
                            <div className="cuadro-titulo">
                                <p>Valle del Conlara</p>
                                <p>y San Martín</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="zona/9">
                        <div id="villa">
                            <div className="cuadro-color"></div>
                            <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/villa.jpg`} className="thumbnail" alt="" />
                            <div className="cuadro-titulo">
                                <p>Villa Mercedes</p>
                                <p>y El Morro</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="zona/10">
                        <div id="huellas">
                            <div className="cuadro-color"></div>
                            <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/huellas.jpg`} className="thumbnail" alt="" />
                            <div className="cuadro-titulo">
                                <p>Huellas</p>
                                <p>Del Pasado</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="zona/11">
                        <div id="llanura">
                            <div className="cuadro-color"></div>
                            <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/llanura.jpg`} className="thumbnail" alt="" />
                            <div className="cuadro-titulo">
                                <p>Llanura</p>
                                <p>Sureña</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="zona/12">
                        <div id="termas">
                            <div className="cuadro-color"></div>
                            <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/termas.jpg`} className="thumbnail" alt="" />
                            <div className="cuadro-titulo">
                                <p>Termas y</p>
                                <p>Salinas</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Recorridos;