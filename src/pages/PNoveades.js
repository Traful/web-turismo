import React, { Component } from 'react';

import Menu from "../components/Menu";
import Novedadesfull from "../components/Novedadesfull";

class PNoveades extends Component {
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
            <div className="PNoveades">
                {
                    this.state.loading ?
                    <div>Cargando...</div>
                    :
                    <React.Fragment>
                        <Menu />
                        <Novedadesfull />
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default PNoveades;