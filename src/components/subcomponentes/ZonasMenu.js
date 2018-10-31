import React, { Component } from 'react';
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

const ZonaMenuUno = (props) => {
    const dzonas = props.data.map((zona) => {
        return <DataZona key={`zona-${zona.id}`} data={zona} oniClick={props.onZonaClick} />
    });
    return(
        <React.Fragment>
            <div className="ZonaMenu-Zonas">
                <h4>Zonas Turísticas</h4>
                <div className="ZonaMenu-Data">
                    {dzonas}
                </div>
            </div>
            <div className="ZonaMenu-Lista">
                <h4>Destinos</h4>
                <ul>
                    <li><Link to="/localidad/6" className="link" onClick={props.onZonaClick}>Ciudad de San Luis</Link></li>
                    <li><Link to="/localidad/33" className="link" onClick={props.onZonaClick}>Villa Mercedes</Link></li>
                    <li><Link to="/localidad/31" className="link" onClick={props.onZonaClick}>Villa de Merlo</Link></li>
                    <li><Link to="/localidad/22" className="link" onClick={props.onZonaClick}>Potrero de los Funes</Link></li>
                    <li><Link to="/localidad/25" className="link" onClick={props.onZonaClick}>San Francisco</Link></li>
                    <li><Link to="/localidad/9" className="link" onClick={props.onZonaClick}>El Trapiche</Link></li>
                    <li><Link to="/localidad/5" className="link" onClick={props.onZonaClick}>Carpintería</Link></li>
                    <li><Link to="/localidad/47" className="link" onClick={props.onZonaClick}>La Carolina</Link></li>
                    <li><Link to="/localidad/18" className="link" onClick={props.onZonaClick}>Nogolí</Link></li>
                    <li><Link to="/localidad/26" className="link" onClick={props.onZonaClick}>San Jerónimo</Link></li>
                    <li><Link to="/localidad/13" className="link" onClick={props.onZonaClick}>La Punta</Link></li>
                    <li><Link to="/localidad/15" className="link" onClick={props.onZonaClick}>Los Molles</Link></li>
                    <li><Link to="/localidad/61" className="link" onClick={props.onZonaClick}>Justo Daract</Link></li>
                    <li><Link to="/localidad/2" className="link" onClick={props.onZonaClick}>Balde</Link></li>
                    <li><Link to="/localidad/19" className="link" onClick={props.onZonaClick}>Nueva Galia</Link></li>
                </ul>
            </div>
        </React.Fragment>
    );
}

const DataZona = (props) => {
    return(
        <Link to={`/zona/${props.data.id}`} onClick={props.oniClick}>
            <div className="ZonaMenu-Item" style={{"backgroundColor": `#${props.data.color}`}}>
                <img src={props.data.foto} alt="Img" />
                <span>{props.data.nombre}</span>
            </div>
        </Link>
    );
}

const ZonaMenuDos = (props) => {
    return(
        <React.Fragment>
            <div className="ZonaMenu-Lista">
                <ul>
                    <li><Link to="/" className="link" onClick={props.onZonaClick}>Calendario de Eventos</Link></li>
                    <li><Link to="/" className="link" onClick={props.onZonaClick}>Turismo de Reuniones</Link></li>
                    <li><Link to="/" className="link" onClick={props.onZonaClick}>Caminos de la Fé Sanluiseña</Link></li>
                    <li><Link to="/" className="link" onClick={props.onZonaClick}>San Luis tierra de letras</Link></li>
                    <li><Link to="/" className="link" onClick={props.onZonaClick}>Ruta de los sabores Puntanos</Link></li>
                </ul>
            </div>
        </React.Fragment>
    );
}

const ZonaMenuTres = (props) => {
    return(
        <React.Fragment>
            <div className="d-flex">
                <div className="ZonaMenu-Lista mr-3">
                    <ul>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Aeropuertos</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Agencias de Viaje</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Alojamientos</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Alquileres de autos</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Atractivos turísticos</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Aplicación para el celular</Link></li>
                    </ul>
                </div>
                <div className="ZonaMenu-Lista mr-3">
                    <ul>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Cajeros automáticos</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Casa de cambio</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Clima</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Cómo llegar</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Empresas de transporte</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Esparcimiento</Link></li>
                    </ul>
                </div>
                <div className="ZonaMenu-Lista mr-3">
                    <ul>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Estaciones de Servicio</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Estados de ruta</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Gastronomía</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Emergencias</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Oficinas de informes turísticos</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Recomendaciones</Link></li>
                    </ul>
                </div>
                <div className="ZonaMenu-Lista">
                    <ul>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Taxis / Remises</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Terminal de Ómnibus</Link></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}

const ZonaMenuCuatro = (props) => {
    return(
        <React.Fragment>
            <div className="d-flex">
                <div className="ZonaMenu-Lista mr-3">
                    <ul>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Atlas turístico digital</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Acciones promocionales</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Campus de capacitación</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Enlaces de interés</Link></li>
                    </ul>
                </div>
                <div className="ZonaMenu-Lista mr-3">
                    <ul>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Inversiones</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Defensa del turísta</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Leyes y reglamentaciones</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Servicios al prestador</Link></li>
                    </ul>
                </div>
                <div className="ZonaMenu-Lista">
                    <ul>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Misión, Visión, Valores</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Prensa turística</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Contacto</Link></li>
                        <li><Link to="/" className="link" onClick={props.onZonaClick}>Ministerio de Turísmo</Link></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}

class ZonasMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            idMenu: 1,
            dataZonas: []
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.idMenu !== prevProps.idMenu) {
            this.setState({
                idMenu: this.props.idMenu
            });
        }
    }

    componentDidMount() {
        this.setState({
            idMenu: this.props.idMenu
        });
        var token = this.context.token;
        var self = this;
        axios({
            method: "get",
            headers: {
                "Authorization": token
            },
            url: `${process.env.REACT_APP_API}/zonas`,
            responseType: 'json'
        })
        .then((response) => {
            self.setState({
                dataZonas: response.data.data.registros
            }, () => {
                this.setState({loading: false});
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const loading = this.state.loading;
        var MenuView = null;
        switch(this.state.idMenu) {
            case 1:
                MenuView = <ZonaMenuUno data={this.state.dataZonas} onZonaClick={this.props.onZonaClick} />;
                break;
            case 2:
                MenuView = <ZonaMenuDos onZonaClick={this.props.onZonaClick} />;
                break;
            case 3:
                MenuView = <ZonaMenuTres onZonaClick={this.props.onZonaClick} />;
                break;
            case 4:
                MenuView = <ZonaMenuCuatro onZonaClick={this.props.onZonaClick} />;
                break;
            default:
                MenuView = <ZonaMenuUno data={this.state.dataZonas} onZonaClick={this.props.onZonaClick} />;
        }
        //const menu = () => { return(<ZonaMenuUno dataZonas={this.state.dataZonas} />); };
        return (
            <div className="ZonasMenu">
                {
                    loading ?
                    "Cargando..."
                    :
                    <React.Fragment>
                    {
                        MenuView
                    }
                    </React.Fragment>
                }
            </div>
        );
    }
}

ZonasMenu.contextType = Consumer;

export default ZonasMenu;