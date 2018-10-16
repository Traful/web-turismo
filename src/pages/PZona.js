import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Menu from "../components/Menu";

class Zona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    render() {
        return (
            <div className="Zona">
                {
                    this.state.loading ?
                    <div>Cargando...</div>
                    :
                    <React.Fragment>
                        <Menu />
                        Zona: {this.props.match.params.id}
                        <Link to="/" className="btn btn-primary">Home</Link>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default Zona;