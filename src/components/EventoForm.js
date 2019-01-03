import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";

class EventoForm extends Component {
    constructor(props) {
        super(props);
        let fecha = new Date();
        fecha = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
        this.state = {
            loading: true,
            evento: null,
            ciudades: [],
            formulario: {
                nombre: "",
                mail: "",
                destino: 1,
                fecha: fecha
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            formulario: {
                ...this.state.formulario,
                [event.target.name]: event.target.value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    componentDidMount() {
        var token = this.context.token;
        var self = this;
        axios({
            method: "get",
            headers: {
                "Authorization": token
            },
            url: `${process.env.REACT_APP_API}/eventos/12`,
            responseType: 'json'
        })
        .then((response) => {
            self.setState({
                evento: response.data.data.registros[0],
                loading: false
            });
        })
        .catch((error) => {
            console.log(error);
        });
        //Localidades
        axios({
            method: "get",
            headers: {
                "Authorization": token
            },
            url: `${process.env.REACT_APP_API}/ciudades`,
            responseType: 'json'
        })
        .then((response) => {
            self.setState({
                ciudades: response.data.data.registros,
                formulario: {
                    ...this.state.formulario,
                    destino: response.data.data.registros[0].id
                }
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        let fechad = ["0000", "00", "00"];
        let fechah = ["0000", "00", "00"];
        let lugar = "";
        let titulo = "";
        let foto = `${process.env.REACT_APP_API_RECURSOS}/recursos/eventos/default.jpg`;
        let id = 0;
        if(this.state.evento) {
            id = this.state.evento.id;
            fechad = this.state.evento.dfecha.split("-");
            fechah = this.state.evento.hfecha.split("-");
            lugar = this.state.evento.localidad;
            titulo = this.state.evento.titulo;
            foto = `${process.env.REACT_APP_API_RECURSOS}/recursos/eventos/${this.state.evento.foto_uno}`;
        }
        let destinos = this.state.ciudades.map((ciudad) => {
            return(<option key={`ciudad-${ciudad.id}`} value={ciudad.id}>{ciudad.nombre}</option>);
        });
        return (
            <div className="EventoForm">
                <div className="leyenda"><h1>A vivir San Luis</h1></div>
                <div className="right-top-bars"></div>
                <div className="body-left">
                    <Link to="/eventos" className="bl-button bg-white p-2 d-flex justify-content-between">
                        <span>Ir al calendario de Eventos</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                    </Link>
                    <Link to={`/evento/${id}`}>
                        <div className="bl-img">
                            <img src={foto} alt="Foto" />
                            <span className="eveform-titulo">{titulo}</span>
                            <span className="eveform-fecha">{`${fechad[2]}/${fechad[1]}/${fechad[0].substr(fechad[0].length - 2)}`} al {`${fechah[2]}/${fechah[1]}/${fechah[0].substr(fechah[0].length - 2)}`} - {lugar}</span>
                        </div>
                    </Link>
                </div>
                <div className="body-right">
                    <form className="cal-form" method="POST" onSubmit={this.handleSubmit}>
                        <div className="f-titulo d-flex flex-column">
                            <span className="ley-1">Utilice el formulario siguiente para realizar</span>
                            <span className="ley-2">Su búsqueda</span>
                        </div>
                        <div className="f-body d-flex flex-column">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" value={this.state.formulario.nombre} onChange={this.handleChange} required />
                            <label htmlFor="mail">e-mail</label>
                            <input type="email" id="mail" name="mail" value={this.state.formulario.mail} onChange={this.handleChange} required />
                            <label htmlFor="destino">destino a visitar</label>
                            <select id="destino" name="destino" value={this.state.formulario.destino} onChange={this.handleChange}>
                                {destinos}
                            </select>
                            <label htmlFor="fecha">fecha de llegada</label>
                            <input type="date" id="fecha" name="fecha" value={this.state.formulario.fecha} onChange={this.handleChange} />
                            <div className="f-pie d-flex justify-content-end mt-2">
                                <Link to={`/localidad/${this.state.formulario.destino}`}>Acepto recibir novedades <i className="fas fa-hands-helping"></i></Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right-bottom-bars"></div>
            </div>
        );
    }
}

EventoForm.contextType = Consumer;

export default EventoForm;