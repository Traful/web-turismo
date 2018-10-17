import React, { Component } from 'react';

class Novedadesfull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [
                {
                    id: 1,
                    fecha: "08/12",
                    lugar: "Justo Daract",
                    color: "#cb6120",
                    titulo: "Cortaderas se prepara",
                    subtitulo: "Para la fiesta de turísmo",
                    foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/novedad_1.jpg`,
                    detalle: "La actividad será el día 28 de Septiembre. Para definir detalles del evento, el Ministro de Turismo de San Luis Aldo Gonzáles Funes recibió este martes en su despacho al intendente de Cortaderas, Juan Aparicio, y a la Secretaria de Cultura, Andrea Reyna",
                },
                {
                    id: 2,
                    fecha: "08/12",
                    lugar: "Justo Daract",
                    color: "#a2bd31",
                    titulo: "Y la milanesa?",
                    subtitulo: "Cuando volvemos a la Gaviota?",
                    foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/novedad_2.jpg`,
                    detalle: "1/2 pila vieja!. Ya no recuerdo cuando fue la última vez que pisamos ese antro de perdición culinaria.",
                },
                {
                    id: 3,
                    fecha: "08/12",
                    lugar: "Justo Daract",
                    color: "#326534",
                    titulo: "Uno de",
                    subtitulo: "Suegras",
                    foto: `${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/novedad_3.jpg`,
                    detalle: "- Buenas le llamamos por una encuesta. ¿Su nombre? - Adán. - ¿Y el de su mujer? - Eva. - Increíble, ¿la serpiente vive aquí también? - Si un momento. ¡¡SUEGRAA!!, la buscan...",
                }
            ],
            index: 0
        }
    }


    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const novedades = this.state.data.map((nov) => {
            return(
                <div className="row mb-5">
                    <div className="col">
                        <div className="novedad-full-item">
                            <div className="imagen">
                                <span style={{backgroundColor: nov.color}}>{nov.fecha} - {nov.lugar}</span>
                                <img className="img-fluid" src={nov.foto} alt="Img" />
                            </div>
                            <div className="titulo" style={{backgroundColor: nov.color}}>
                                <h3>{nov.titulo}</h3>
                                <h3>{nov.subtitulo}</h3>
                            </div>
                            <div className="body">
                                <p className="text-dark mb-2">{nov.detalle}</p>
                                <span className="btn-novedades">Leer <i className="fas fa-arrow-right"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <React.Fragment>
                <div className="container Novedadesfull">
                    <div className="nf-titulo">
                        <span>NOVEDADES</span>
                    </div>
                </div>
                <div className="container">
                    {novedades}
                </div>
            </React.Fragment>
        );
    }
}

/*
<div class="pie">
    <span class="btn-novedades">Leer <i class="fas fa-arrow-right"></i></span>
</div>
*/
export default Novedadesfull;