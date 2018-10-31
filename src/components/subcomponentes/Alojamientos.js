import React, { Component } from "react";

/*
    Ej de uso: <Alojamientos localidad="0" />
*/

class Alojamientos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            idLocalidad: 0
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.lat !== prevProps.lat || this.props.lng !== prevProps.lng) {
            this.setMap();
        }
    }

    componentDidMount() {
        this.setState({
            idLocalidad: this.props.idLocalidad,
            loading: false
        });
    }

    render() {
        const loading = this.state.loading;
        var treinta = [];
        for(let i=1; i < 31; i++) {
            treinta.push(i);
        }
        const servicios = treinta.map((nro) => {
            return(<li key={`li-${nro}`}><input type="checkbox" name="vehicle1" value="Bike" /> Sin electricidad</li>);
        });
        return(
            <React.Fragment>
                {
                    loading ?
                    <div>Cargando...</div>
                    :
                    <div className="alojamientos-container">
                        <div className="alojamientos-filtro">
                            <div className="form-group">
                                <label htmlFor="tipo">Tipo de Alojamiento</label>
                                <select name="tipo" id="tipo" className="form-control" >
                                    <option value="1">Pantano</option>
                                    <option value="1">Uno</option>
                                    <option value="2">Dos</option>
                                    <option value="3">Tres</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoria">Categoría</label>
                                <select name="categoria" id="categoria" className="form-control" >
                                    <option value="1">Hediondo</option>
                                    <option value="1">Uno</option>
                                    <option value="2">Dos</option>
                                    <option value="3">Tres</option>
                                </select>
                            </div>
                            <div className="alojamiento-servicios">
                                <ul>
                                    {servicios}
                                </ul>
                            </div>
                        </div>
                        <div className="alojamientos-lista">
                            <div className="alo-card">
                                <div className="img-box">
                                    <div className="img-content">
                                        <div className="nombre">Hotel Potrero De Los Funes</div>
                                        <img className="" src="https://source.unsplash.com/random" alt="Img" />
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="content">
                                        Aloha
                                    </div>
                                </div>
                            </div>
                            <div className="alo-card">
                                <div className="img-box">
                                    <div className="img-content">
                                        <div className="nombre">Hola</div>
                                        <img className="" src="https://source.unsplash.com/random" alt="Img" />
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="content">
                                        Aloha
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="alojamientos-estadisticas">
                            Datos estadísticos
                        </div>
                    </div>
                }
                <style jsx="true">{`
                `}</style>
            </React.Fragment>
        );
    }
}

export default Alojamientos;