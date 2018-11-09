import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import Viewer from "./Viewer";

/*
    Ej de uso: <Alojamientos idLocalidad="0" />
*/

class Alojamientos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            idLocalidad: 0,
            alojamientos: []
        };
        this.setData = this.setData.bind(this);
    }

    setData() {
        const token = this.context.token;
        var self = this;
        this.setState({
            loading: true
        }, () => {
            axios({
                method: "get",
                headers: {
                    "Authorization": token
                },
                url: `${process.env.REACT_APP_API}/guias/ciudad/${self.state.idLocalidad}/full`,
                responseType: 'json'
            })
            .then((response) => {
                self.setState({
                    alojamientos: response.data.data.registros,
                    loading: false
                }, () => {
                    console.log(self.state.alojamientos);
                });
            })
            .catch((error) => {
                console.log(error);
            });
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.idLocalidad !== prevProps.idLocalidad) {
            this.setState({
                idLocalidad: this.props.idLocalidad
            }, () => {
                this.setData();
            });
        }
    }

    componentDidMount() {
        this.setState({
            idLocalidad: this.props.idLocalidad
        }, () => {
            this.setData();
        });
    }

    render() {
        const loading = this.state.loading;
        var treinta = [];
        for(let i=1; i < 31; i++) {
            treinta.push(i);
        }
        const servicios = treinta.map((nro) => {
            return(<li key={`li-${nro}`}><input type="checkbox" name="vehicle1" value="Bike" /> Sin electricidad</li>);
        });
        const alojamientos = this.state.alojamientos.map((alo) => {
            let foto = "default.jpg";
            if(alo.fotos.length > 0) {
                foto = alo.fotos[0].imagen;
            }
            return(
                <div key={`alo-card-${alo.id}`} className="alo-card m-3">
                    <div className="img-box">
                        <div className="img-content">
                            <div className="nombre">{alo.nombre}</div>
                            <img className="" src={`${process.env.REACT_APP_API}/imagenes/${foto}`} alt="Img" />
                        </div>
                    </div>
                    <div className="details">
                        <div className="content">
                            Aloha
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <React.Fragment>
                {
                    loading ?
                    <div>Cargando...</div>
                    :
                    <Viewer visibles="4">
                        {alojamientos}
                    </Viewer>
                }
                <style jsx="true">{`
                `}</style>
            </React.Fragment>
        );
    }
}

Alojamientos.contextType = Consumer;

export default Alojamientos;