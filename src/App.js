import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PHome from "./pages/PHome";
import PZona from "./pages/PZona";
import PNovedades from "./pages/PNoveades";
import PLocalidad from "./pages/PLocalidad";

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Route exact path="/" component={PHome} />
					<Route exact path="/novedades" component={PNovedades} />
					<Route exact path="/zona/:id" component={PZona} />
					<Route exact path="/localidad/:id" component={PLocalidad} />
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
