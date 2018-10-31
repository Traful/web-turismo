import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ZonasMenu from "./subcomponentes/ZonasMenu";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idSubMenu: 1,
            visibleMenu: false
        }
        this.setMenu = this.setMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu() {
        this.setState({visibleMenu: !this.state.visibleMenu});
        console.log("close menu");
    }

    setMenu(id) {
        if(this.state.idSubMenu === id) {
            this.setState({visibleMenu: !this.state.visibleMenu});
        } else {
            this.setState({
                idSubMenu: id
            }, () => {
                this.setState({ visibleMenu: true });
            });
        }
    }

    componentDidUpdate() {
        /*
        if(this.state.visibleMenu) {
            this.setState({ visibleMenu: false });
        }
        */
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Menu">
                <div className="container-fluid menu-ul animated bounceInDown delay-2s">
                    <ul>
                        <li><Link to="/" className="link-menu"><i className="fas fa-home"></i></Link></li>
                        <li><span className="link-menu" onClick={(e) => this.setMenu(1, e)}>¿QUÉ VISITAMOS?</span></li>
                        <li><span className="link-menu" onClick={(e) => this.setMenu(2, e)}>¿QUÉ HACEMOS?</span></li>
                        <li><span className="link-menu" onClick={(e) => this.setMenu(3, e)}>¡A PLANIFICAR!</span></li>
                        <li><span className="link-menu" onClick={(e) => this.setMenu(4, e)}>NOSOTROS</span></li>
                    </ul>
                </div>
                <div className="logo">
                    <img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/slpuroturismo-01.png`} alt="San Luis" />
                </div>
                {
                    this.state.visibleMenu
                    ?
                    <div className="menu-visita-container animated fadeIn">
                        <div className="menu-visita">
                            <ZonasMenu idMenu={this.state.idSubMenu} onZonaClick={this.closeMenu} />
                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        );
    }
}

export default Menu;