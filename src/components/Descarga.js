import React, { Component } from 'react';

class Descarga extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    render() {
        return (
            <div className="Descarga">
                <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/primavera-sl.png`} alt="Logo"/>
                <div className="descarga-leyenda">
                    <div className="descarga-titulos">
                        <span className="dt-1">Próximamente</span>
                        <span className="dt-2">San Luis Turismo</span>
                        <span className="dt-3">Una app para tu visita</span>
                    </div>
                    <div className="descarga-icono"><i className="fas fa-arrow-down"></i></div>
                </div>
            </div>
        );
    }
}

export default Descarga;