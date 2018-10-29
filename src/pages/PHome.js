import React, { Component } from 'react';
import Recorridos from "../components/Recorridos";
import Descarga from "../components/Descarga";
import Novedades from "../components/Novedades";

class Home extends Component {
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
            <div className="Home">
                {
                    this.state.loading ?
                    <div>Cargando...</div>
                    :
                    <React.Fragment>
                        <div className="menu-y-slider">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item img-slider-1 active"></div>
                                    <div className="carousel-item img-slider-2"></div>
                                    <div className="carousel-item img-slider-3"></div>
                                    <div className="carousel-item img-slider-4"></div>
                                    <div className="carousel-item img-slider-5"></div>
                                    <div className="carousel-item img-slider-6"></div>
                                    <div className="carousel-item img-slider-7"></div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                                <div className="slider-home-leyenda">
                                    <h1>En San Luis</h1>
                                    <span>Viví experiencias únicas</span>
                                </div>
                            </div>
                        </div>
                        <Recorridos />
                        <Descarga />
                        <Novedades time="10000"/>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default Home;