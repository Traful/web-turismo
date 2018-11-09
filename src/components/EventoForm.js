import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
//import axios from "axios";

class EventoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    render() {
        return (
            <div className="EventoForm">
                <div className="leyenda"><h1>A vivir San Luis</h1></div>
                <div className="right-top-bars"></div>
                <div className="body-left">
                    <Link to="/eventos" className="bl-button bg-white p-2 d-flex justify-content-between">
                        <span>Ir al calendario de Eventos</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                    </Link>
                    <div className="bl-img">
                        <img src="https://source.unsplash.com/random/640x480" alt="Foto" />
                        <span>08/12 al 10/12 - Justo Daract</span>
                    </div>
                </div>
                <div className="body-right">
                    <form className="cal-form" method="POST" action="#">
                        <div className="f-titulo d-flex flex-column">
                            <span className="ley-1">Utilice el formulario siguiente para realizar</span>
                            <span className="ley-2">Su búsqueda</span>
                        </div>
                        <div className="f-body d-flex flex-column">
                            <label htmlFor="">Nombre</label>
                            <input type="text" />
                            <label htmlFor="">e-mail</label>
                            <input type="email" />
                            <label htmlFor="">destino a visitar</label>
                            <select name="" id="">
                                <option value="1">Opcion 1</option>
                                <option value="2">Opcion 2</option>
                                <option value="3">Opcion 3</option>
                            </select>
                            <label htmlFor="">fecha de llegada</label>
                            <input type="date" />
                            <div className="f-pie d-flex justify-content-end mt-2">
                                Acepto recibir novedades <i className="fas fa-hands-helping"></i>
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