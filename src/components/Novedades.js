import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Novedades extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [
                {
                    id: 1,
                    titulo: "Cortaderas se prepara",
                    subtitulo: "Para la fiesta de turísmo",
                    foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/novedad_1.jpg`,
                    detalle: "La actividad será el día 28 de Septiembre. Para definir detalles del evento, el Ministro de Turismo de San Luis Aldo Gonzáles Funes recibió este martes en su despacho al intendente de Cortaderas, Juan Aparicio, y a la Secretaria de Cultura, Andrea Reyna",
                    display: "block"
                },
                {
                    id: 2,
                    titulo: "Y la milanesa?",
                    subtitulo: "Cuando volvemos a la Gaviota?",
                    foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/novedad_2.jpg`,
                    detalle: "1/2 pila vieja!. Ya no recuerdo cuando fue la última vez que pisamos ese antro de perdición culinaria.",
                    display: "none"
                },
                {
                    id: 3,
                    titulo: "Uno de",
                    subtitulo: "Suegras",
                    foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/novedad_3.jpg`,
                    detalle: "- Buenas le llamamos por una encuesta. ¿Su nombre? - Adán. - ¿Y el de su mujer? - Eva. - Increíble, ¿la serpiente vive aquí también? - Si un momento. ¡¡SUEGRAA!!, la buscan...",
                    display: "none"
                }
            ],
            index: 0
        }
        this.stop = this.stop.bind(this);
    }

    carouselTimer() {
        let indice = parseInt(this.state.index, 10);
        indice++;
        if(indice > (this.state.data.length - 1)) {
            indice = 0;
        }
        this.setState({
            index: indice
        }, () => {
            let oldData = Object.assign([], this.state.data);
            oldData = oldData.map((d) => {
                return {...d, display: "none"}
            });
            let newDataItem = oldData[indice];
            newDataItem["display"] = "block";
            oldData[indice] = newDataItem;
            this.setState({
                data: oldData
            });
        });
    }

    stop() {
        clearInterval(this.timerID);
    }

    componentWillMount() {
        //A los datos del Fetch hay que agregar la propiedad display: "none"
        if(this.state.data.length) {
            this.timerID = setInterval(() => this.carouselTimer(), this.props.time);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const items = this.state.data.map((item) => {
            return(
                <div key={`ci-${item.id}`} className="animated fadeInRight delay-2s" style={{display: item.display}}>
                    <div className="carousel-item-js">
                        <img src={item.foto} className="thumbnail" alt="Img" />
                        <div>
                            <p>{item.titulo}</p>
                            <p>{item.subtitulo}</p>
                            <p>{item.detalle}</p>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <React.Fragment>
                <div className="container Novedades">
                    <div className="row">
                        <div className="col">
                            <div className="novedades-body">
                                <div className="novedades-carousel">
                                    {items}
                                </div>
                                <Link to="/novedades">
                                    <div className="novedades-titulo">
                                        <p>No</p>
                                        <p>Ve</p>
                                        <p>Da</p>
                                        <p>Des</p>
                                        <p><i className="fas fa-arrow-right"></i></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="btn btn-primary" onClick={this.stop}>Stop</button>
            </React.Fragment>
        );
    }
}

export default Novedades;