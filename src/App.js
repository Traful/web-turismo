import React, { Component } from 'react';
//import { Provider, Consumer } from "./context";
import { Provider } from "./context";
import './App.css';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import ToTop from "./components/ToTop";

import PHome from "./pages/PHome";
import PZona from "./pages/PZona";
import PNovedades from "./pages/PNovedades";
import PNovedad from "./pages/PNovedad";
import PLocalidad from "./pages/PLocalidad";
import PAtractivo from "./pages/PAtractivo";
import PEventos from "./pages/PEventos";
import PEvento from "./pages/PEvento";
import PListadoAtractivos from "./pages/PListadoAtractivos";
import PAlojamiento from "./pages/PAlojamiento";
import PFiltroAlojamiento from "./pages/PFiltroAlojamiento";

import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<Provider>
				<Router history={Router.hashHistory}>
					<React.Fragment>
						<Menu />
						<Switch>
							<Route exact path="/" component={PHome} />
							<Route exact path="/novedades" component={PNovedades} />
							<Route exact path="/novedad/:id" component={PNovedad} />
							<Route exact path="/zona/:id" component={PZona} />
							<Route exact path="/localidad/:id" component={PLocalidad} />
							<Route exact path="/atractivo/:id" component={PAtractivo} />
							<Route exact path="/atractivos/:id" component={PListadoAtractivos} />
							<Route exact path="/eventos" component={PEventos} />
							<Route exact path="/evento/:id" component={PEvento} />
							<Route exact path="/alojamiento/:id" component={PAlojamiento} />
							<Route exact path="/filtroalojamiento" component={PFiltroAlojamiento} />
						</Switch>
						<ToTop showAt={400} />
						<Footer />
					</React.Fragment>
				</Router>
			</Provider>
		);
	}
	/*
	render() {
		return (
			<Provider>
				<Consumer>
					{ value => {
						return (
							<Router history={Router.hashHistory}>
								<React.Fragment>
									<Switch>
										<Route exact path="/" component={PHome} />
										<Route exact path="/novedades" component={PNovedades} />
										<Route exact path="/zona/:id" component={PZona} />
										<Route exact path="/localidad/:id" component={PLocalidad} />
										<Route exact path="/atractivo/:id" component={PAtractivo} />
									</Switch>
									<Footer />
								</React.Fragment>
							</Router>
						);
					}}
				</Consumer>
			</Provider>
		);
	}
	*/
}

export default App;