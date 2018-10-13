import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Layout
import Menu from "./layout/Menu";
import Recorridos from "./layout/Recorridos";
import Descarga from "./layout/Descarga";
import Novedades from "./layout/Novedades";
import Carousel from "./layout/Carousel";

/*
class App extends Component {
	render() {
		return (
			<div className="App">
				<Menu />
				<Recorridos />
				<Descarga />
				<Novedades /> //No funciona aún
			</div>
		);
	}
}
*/

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
                {
                    id: 1,
                    titulo: "Cortaderas se prepara",
                    subtitulo: "Para la fiesta de turísmo",
                    foto: "http://localhost/api-turismo/public/recursos/novedades/novedad_1.jpg",
                    detalle: "La actividad será el día 28 de Septiembre. Para definir detalles del evento, el Ministro de Turismo de San Luis Aldo Gonzáles Funes recibió este martes en su despacho al intendente de Cortaderas, Juan Aparicio, y a la Secretaria de Cultura, Andrea Reyna"
                },
                {
                    id: 2,
                    titulo: "Hans Araujo",
                    subtitulo: "Tiene habre",
                    foto: "http://localhost/api-turismo/public/recursos/novedades/novedad_2.jpg",
                    detalle: "Siendo las 13:06 horas del día jueves 11 de Octubre de 2018 el Sr. Araujo, junto a sus intestinos, manifestó la necesidad de ingerir algún tipo de alimento!!!"
                },
                {
                    id: 3,
                    titulo: "Qué pasó vieja?",
                    subtitulo: "Qué turismo queremos?",
                    foto: "http://localhost/api-turismo/public/recursos/novedades/novedad_3.jpg",
                    detalle: "El númber one, alias Eze, no deja de preguntarse lo que parecería ser uno de los más grandes enigmas del  Ministerio de Turísmo."
                }
            ]
		};
	}
	render() {
		return (
			<div className="App">
				<Carousel data={this.state.data} time={2000} />
			</div>
		);
	}
}

export default App;
