import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Layout
import Menu from "./layout/Menu";
import Recorridos from "./layout/Recorridos";

/*
class App extends Component {
	render() {
		return (
			<div className="App">
				<Menu />
				<Recorridos />
			</div>
		);
	}
}
*/

class App extends Component {
	render() {
		return (
			<div className="App">
				<Recorridos />
			</div>
		);
	}
}

export default App;
