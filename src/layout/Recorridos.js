import React, { Component } from 'react';

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
                    <div id="sierras">
                        <div className="cuadro-color"></div>
                        <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`} className="thumbnail" alt="" />
                        <div className="cuadro-titulo">
                            <p>Sierras</p>
                            <p>Centrales</p>
                        </div>
                    </div>
                    <div id="norte">
                        <div className="cuadro-color"></div>
                        <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`} className="thumbnail" alt="" />
                        <div className="cuadro-titulo">
                            <p>Norte</p>
                            <p>Puntano</p>
                        </div>
                    </div>
                    <div id="costa">
                        <div className="cuadro-color"></div>
                        <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`} className="thumbnail" alt="" />
                        <div className="cuadro-titulo">
                            <p>Costa de los</p>
                            <p>Comechingones</p>
                        </div>
                    </div>
                    <div id="valle">
                        <div className="cuadro-color"></div>
                        <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/Image00001.jpg`} className="thumbnail" alt="" />
                        <div className="cuadro-titulo">
                            <p>Valle del Conlara</p>
                            <p>y San Martín</p>
                        </div>
                    </div>
                    <div id="villa">Villa</div>
                    <div id="huellas">Huellas</div>
                    <div id="llanura">Llanura</div>
                    <div id="termas">Termas</div>
                </div>
            </div>
        );
    }
}

export default Recorridos;