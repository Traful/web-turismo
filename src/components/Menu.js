import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import ZonasMenu from "./subcomponentes/ZonasMenu";

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
            submenu = <ZonasMenu />;
        }
        return (
            <div className="Menu">
                <div className="container-fluid menu-ul animated bounceInDown delay-2s">
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
        );
    }
}

export default Menu;