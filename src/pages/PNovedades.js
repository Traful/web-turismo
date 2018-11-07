import React, { Component } from 'react';
import Novedadesfull from "../components/Novedadesfull";

class PNovedades extends Component {
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
            <div className="PNovedades">
                {
                    this.state.loading ?
                    <div>Cargando...</div>
                    :
                    <React.Fragment>
                        <Novedadesfull />
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default PNovedades;