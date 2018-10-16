import React, { Component } from 'react';

class Novedadesfull extends Component {
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
    }


    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="container Novedadesfull">
                <div className="nf-titulo">
                    <span>Noveades</span>
                </div>
                <div className="nf-body">
                    <div className="nf-novedad">
                        <div className="nf-novedad-left">
                            <img className="img-fluid" src={`${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/novedad_1.jpg`} alt="Img" />
                            <span style={{backgroundColor: "#cb6120"}}>08/12 - Justo Daract</span>
                        </div>
                        <div className="nf-novedad-right">
                            <div className="nf-right-titulo" style={{backgroundColor: "#cb6120"}}>
                                <h3>Cortaderas de prepara</h3>
                                <h3>Para la fiesta de Turísmo</h3>
                            </div>
                            <div className="nf-right-body">
                                <p className="p-2 text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aperiam exercitationem iusto! Similique exercitationem ipsum nemo placeat non quia pariatur rem, veritatis reprehenderit. Doloremque a et numquam inventore, excepturi minima.
                                Ducimus ipsam porro nostrum est consequatur. Ad possimus vitae repellat at iusto error modi nulla harum perspiciatis quidem, sint totam laboriosam inventore ratione recusandae nihil quae incidunt distinctio delectus doloribus.
                                Debitis quia animi inventore, vitae itaque voluptatem, quisquam quasi autem laborum molestias iste adipisci repudiandae corporis veritatis incidunt ratione impedit in aspernatur voluptates nobis quae quas est ex! Nesciunt, repellendus?
                                Vitae nemo fugit, fugiat officiis facilis voluptate. Alias repellendus, dolorum tempora voluptates, maxime itaque, aliquam temporibus deleniti at a id tempore cumque blanditiis ipsum suscipit officiis aspernatur. Dolore, porro rem?
                                Suscipit quo eligendi corporis aliquid sed odio vel nesciunt, numquam dolorem cum animi quaerat debitis pariatur sint. Voluptatem, dolorem aliquid. Officia ut cum, nulla harum modi corporis autem incidunt fugiat.
                                Nisi dolore impedit, maxime eligendi labore vel? Maiores dicta accusantium possimus, nihil quos vel corporis repellat debitis aut fuga maxime minus, harum laboriosam sequi nostrum ipsam voluptas. Dolorum, praesentium saepe.
                                Maiores repudiandae culpa dolores incidunt possimus odit, doloribus a atque numquam ipsum, quia reiciendis enim ad itaque. Eum, non ex itaque unde vel exercitationem voluptatem quasi similique deserunt autem ut!
                                Sapiente possimus dicta illum aliquam molestias quam voluptas. Dignissimos, sapiente, ex perferendis temporibus quidem laudantium repudiandae reiciendis maxime neque tenetur dolores animi ipsam omnis mollitia cupiditate ad illo atque corrupti.
                                Reiciendis quas corporis delectus fugiat officia cum obcaecati, consectetur debitis sint voluptatibus dolorem laborum velit repudiandae similique porro consequuntur autem magnam exercitationem unde sed? Ipsa molestias ex fuga minima omnis!
                                Quisquam officiis magnam consequuntur quod ad ducimus voluptatibus provident tenetur? Eveniet numquam aut ut recusandae ratione dolor accusantium harum pariatur eligendi illo nemo, nobis, ad nesciunt id optio placeat minus.</p>
                            </div>
                            <div className="nf-right-btn">
                                <span className="btn-novedades">Leer <i className="fas fa-arrow-right"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Novedadesfull;