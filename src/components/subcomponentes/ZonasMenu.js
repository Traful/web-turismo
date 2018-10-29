import React, { Component } from 'react';
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

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

class ZonasMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataZonas: []
        }
    }

    componentDidMount() {
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
        const dzonas = this.state.dataZonas.map((zona) => {
            return <DataZona key={`zona-${zona.id}`} data={zona} oniClick={this.props.onZonaClick} />
        });
        return (
            <div className="ZonasMenu">
                {
                    loading ?
                    "Cargando..."
                    :
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
                                <li><Link to="/localidad/6" className="link">Ciudad de San Luis</Link></li>
                                <li><Link to="/localidad/33" className="link">Villa Mercedes</Link></li>
                                <li><Link to="/localidad/31" className="link">Villa de Merlo</Link></li>
                                <li><Link to="/localidad/22" className="link">Potrero de los Funes</Link></li>
                                <li><Link to="/localidad/25" className="link">San Francisco</Link></li>
                                <li><Link to="/localidad/9" className="link">El Trapiche</Link></li>
                                <li><Link to="/localidad/5" className="link">Carpintería</Link></li>
                                <li><Link to="/localidad/47" className="link">La Carolina</Link></li>
                                <li><Link to="/localidad/18" className="link">Nogolí</Link></li>
                                <li><Link to="/localidad/26" className="link">San Jerónimo</Link></li>
                                <li><Link to="/localidad/13" className="link">La Punta</Link></li>
                                <li><Link to="/localidad/15" className="link">Los Molles</Link></li>
                                <li><Link to="/localidad/61" className="link">Justo Daract</Link></li>
                                <li><Link to="/localidad/2" className="link">Balde</Link></li>
                                <li><Link to="/localidad/19" className="link">Nueva Galia</Link></li>
                            </ul>
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

ZonasMenu.contextType = Consumer;

export default ZonasMenu;