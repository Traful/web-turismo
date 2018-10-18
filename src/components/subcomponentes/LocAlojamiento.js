import React, { Component } from 'react';
import axios from "axios";

var ids_servicios = 0;

const Aloj = (props) => {
    const servicios = props.data.servicios.map((s) => {
        ids_servicios++;
        return(<li key={`serv-${ids_servicios}`}>{s.descripcion}</li>)
    });
    return(
        <div className="Aloj-Data mt-5 mb-5 bg-dark text-white p-2 rounded">
            <div className="data-nombre bg-info text-dark rounded pl-2 pr-2">
                {props.data.nombre}
            </div>
            <div className="data-info">
                <p>Tipo: {props.data.tipo}</p>
                <p>Categoría: {props.data.valor}</p>
                <p>Domicilio: {props.data.domicilio}</p>
                <p>Tel./Cel.: {props.data.telefono}</p>
                <p>Email: {props.data.mail}</p>
                <p>Web: {props.data.web}</p>
                <p>Lat: {props.data.latitud}</p>
                <p>Lon: {props.data.longitud}</p>
            </div>
            <div className="data-fotos">
                Fotos
            </div>
            <div className="data-servicios">
                Servicios
                <ul>
                    {servicios}
                </ul>
            </div>
            <div className="data-tarifas">
                Tarifas
            </div>
            <div className="data-redes">
                Redes
            </div>
        </div>
    );
}

class LocAlojamiento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idLocalidad: 0,
            alojamientos: []
        }
    }

    componentWillMount() {
        var self = this;
        this.setState({
            idLocalidad: this.props.id
        }, () => {
            //Obtener todos los Alojamientos de la Localidad
            axios({
                method: "get",
                headers: {
                    "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Mzk1MzMxMTEsImV4cCI6MTUzOTU2MTkxMSwianRpIjoiPz8_Iiwic3ViIjoiPz8_Iiwic2NvcGUiOnsiaWQiOiIxIiwicGVybWlzb3MiOnsiR0VUIjoiMSIsIlBPU1QiOiIxIiwiUFVUIjoiMSIsIlBBVENIIjoiMSIsIkRFTEVURSI6IjEifSwiaWR0aXBvIjoiMSJ9fQ.EgXE6dMUwinCs-X5QoYdI3YTXjoVZk62j43PHu5w6sk'
                },
                url: `${process.env.REACT_APP_API}/guias/ciudad/${self.state.idLocalidad}/full`,
                responseType: 'json'
            })
            .then((response) => {
                self.setState({
                    alojamientos: response.data.data.registros
                });
            })
            .catch((error) => {
                console.log(error);
            });
        })
    }

    render() {
        console.log(this.state.alojamientos);
        const alojamientos = this.state.alojamientos.map((a) => {
            return <Aloj key={`aloj-${a.id}`} data={a} />
        });
        return (
            <div className="LocAlojamiento">
                {alojamientos}
            </div>
        );
    }
}

export default LocAlojamiento;