import React, { Component } from 'react';

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
                    foto: "http://localhost/api-turismo/public/recursos/novedades/novedad_1.jpg",
                    detalle: "La actividad será el día 28 de Septiembre. Para definir detalles del evento, el Ministro de Turismo de San Luis Aldo Gonzáles Funes recibió este martes en su despacho al intendente de Cortaderas, Juan Aparicio, y a la Secretaria de Cultura, Andrea Reyna"
                },
                {
                    id: 2,
                    titulo: "Hans Araujo",
                    subtitulo: "Tiene habre",
                    foto: "http://localhost/api-turismo/public/recursos/novedades/novedad_2.jpg",
                    detalle: "Siendo las 13:06 horas del día jueves 11 de Octubre de 2018 el Sr. Araujo, junto a sus intestinos, manifestó la necesidad de ingerir algún tipo de alimento!!!"
                },
                {
                    id: 3,
                    titulo: "Qué pasó vieja?",
                    subtitulo: "Qué turismo queremos?",
                    foto: "http://localhost/api-turismo/public/recursos/novedades/novedad_3.jpg",
                    detalle: "El númber one, alias Eze, no deja de preguntarse lo que parecería ser uno de los más grandes enigmas del  Ministerio de Turísmo."
                }
            ],
            carousel: {
                slideIndex: 0,
                slideTime: 2000
            }
            
        };
        this.carousel = this.carousel.bind(this);
    }

    carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
        }
        this.setState({
            carousel: {
                ...this.state.carousel,
                slideIndex: this.state.slideIndex++
            }
        }, () => {

        });
        if(this.state.slideIndex > x.length) {
            this.setState({
                carousel: {
                    ...this.state.carousel,
                    slideIndex: 1
                }
            });
        } 
        x[this.state.carousel.slideIndex-1].style.display = "block"; 
        setTimeout(this.carousel, this.state.carousel.slideTime); // Change image every 2 seconds
    }

    componentDidMount() {
        this.carousel();
    }

    render() {
        var activo = false;
        /*
        const items = this.state.data.map((novedad) => {
            if(!activo) {
                activo = true;
                return(
                    <div className="carousel-item active" key={`nov-${novedad.id}`}>
                       <img src={novedad.foto} class="thumbnail" alt="Img" />
                        <div>
                            <p>{novedad.titulo}</p>
                            <p>{novedad.subtitulo}</p>
                            <p>{novedad.detalle}</p>
                        </div>
                    </div>
                );
            } else {
                return(
                    <div className="carousel-item" key={`nov-${novedad.id}`}>
                       <img src={novedad.foto} class="thumbnail" alt="Img" />
                        <div>
                            <p>{novedad.titulo}</p>
                            <p>{novedad.subtitulo}</p>
                            <p>{novedad.detalle}</p>
                        </div>
                    </div>
                );
            }
        });
        */
       const items = this.state.data.map((novedad) => {
            let estilo = {
                backgroundImage: `url(${novedad.foto})`,
                backroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }
            return(
                <div key={`slide-${novedad.id}`} className="mySlides" style={estilo}>
                    {novedad.id} {novedad.detalle}
                </div>
            );
        });

        return (
            <div className="container Novedades">
                <div className="row">
                    <div className="col">
                        <div className="novedades-body">
                            <div id="novedades-carousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {items}
                                </div>
                            </div>
                            <div className="novedades-titulo">
                                <p>No</p>
                                <p>Ve</p>
                                <p>Da</p>
                                <p>Des</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Novedades;