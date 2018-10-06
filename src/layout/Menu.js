import React, { Component } from 'react';
import Zonas from "../components/Zonas";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idSubMenu: 0,
            visibleMenu: false
        }
        this.setMenu = this.setMenu.bind(this);
    }

    setMenu(id) {
        if(this.state.idSubMenu === id) {
            this.setState({visibleMenu: !this.state.visibleMenu});
        } else {
            this.setState({
                idSubMenu: id,
                visibleMenu: true
            });
        }
    }

    componentWillMount() {

    }

    render() {
        var submenu = null;
        if(this.state.idSubMenu === 1) {
            submenu = <Zonas />;
        }
        return (
            <header>
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
                    <div className="container-fluid menu animated bounceInDown delay-2s">
                        <ul>
                            <li><a href="javascript:void(0);" onClick={(e) => this.setMenu(1, e)}>¿QUÉ VISITAMOS?</a></li>
                            <li><a href="javascript:void(0);" onClick={(e) => this.setMenu(2, e)}>¿QUÉ HACEMOS?</a></li>
                            <li><a href="javascript:void(0);" onClick={(e) => this.setMenu(3, e)}>¡A PLANIFICAR!</a></li>
                            <li><a href="javascript:void(0);" onClick={(e) => this.setMenu(4, e)}>NOSOTROS</a></li>
                        </ul>
                    </div>
                    <div className="logo">
                        <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/slpuroturismo-01.png`} alt="San Luis" />
                    </div>
                    <div className="menu-leyenda">
                        <h1>En San Luis</h1>
                        <span>Viví experiencias únicas</span>
                    </div>
                    {
                        this.state.visibleMenu
                        ?
                        <div className="menu-visita-container animated fadeIn">
                            <div className="menu-visita">
                                {submenu}
                            </div>
                        </div>
                        :
                        ""
                    }
                </div>
            </header>
        );
    }
}

export default Menu;