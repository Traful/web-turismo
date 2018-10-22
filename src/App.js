import React, { Component } from 'react';
import './App.css';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import PHome from "./pages/PHome";
import PZona from "./pages/PZona";
import PNovedades from "./pages/PNoveades";
import PLocalidad from "./pages/PLocalidad";
import PAtractivo from "./pages/PAtractivo";

import Footer from "./components/Footer";

class App extends Component {
	render() {
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
	}
}

export default App;
