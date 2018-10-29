import React, { Component } from "react";

class PListadoAtractivos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [
        {
          id: 1,
          lugar: "Cortaderas",
          tipo: "Ríos y saltos de agua",
          color: "#326534",
          titulo: "Baños Romanos",
          /*`${
            process.env.REACT_APP_API_RECURSOS
          }/recursos/novedades/novedad_3.jpg`,*/
          foto:
            "http://turismo.sanluis.gov.ar/wp-content/uploads/2017/11/Arroyo-Benitez.jpg",
          detalle:
            "Desde la Ciudad de San Luis, camino de asfalto, por Ruta Provincial Nº 20 hasta empalme Ruta Provincial Nº 55 (Autopista de Los Comechingones). Se transita hasta el ingreso de la localidad de Concarán, girando hacia la derecha, se toma Ruta…"
        },
        {
          id: 2,
          lugar: "Cortaderas",
          color: "#326534",
          titulo: "Arroyo Cortaderas",
          tipo: "Ríos y saltos de agua",
          foto:
            "http://turismo.sanluis.gov.ar/wp-content/uploads/cache/images/2018/10/cortaderas/cortaderas-1841179280.jpg",
          detalle:
            "El Arroyo Cortaderas es un encantador curso de agua que nace en las Sierras de los Comechingones, en la Quebrada de Villa Elena y toma el…"
        },
        {
          id: 3,
          fecha: "08/12",
          lugar: "Cortaderas",
          tipo: "Balneario",
          color: "#326534",
          titulo: "Balneario Municipal Cortaderas",
          foto:
            "http://turismo.sanluis.gov.ar/wp-content/uploads/cache/images/2018/10/Balneario-Municipal-de-Cortaderas_-San-Luis/Balneario-Municipal-de-Cortaderas_-San-Luis-3416744294.jpg",
          detalle:
            "A 200 mts del ingreso a Cortaderas sobre Ruta Provincial N° 1. Al sur del ingreso a Cortaderas, se avanza 200 mts y encontrará hacia el…"
        }
      ],
      index: 0
    };
  }

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    const ListadoAtractivofull = this.state.data.map(atrac => {
      return (
        <div key={`atractivo-${atrac.id}`}  className="row mb-5">
          <div className="col">
            <div className="atractivo-full-item">
              <div className="imagen">
                <span style={{ backgroundColor: atrac.color }}>
                  {atrac.lugar} - {atrac.tipo}
                </span>
                <img className="" src={atrac.foto} alt="Img" />
              </div>
              <div className="titulo" style={{ backgroundColor: atrac.color }}>
                <h3>{atrac.titulo}</h3>
              </div>
              <div className="body">
                <p className="text-dark mb-2">{atrac.detalle}</p>
                <span className="btn-novedades">
                  Leer <i className="fas fa-arrow-right" />
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <div className="container ListadoAtractivofull">
          <div className="nf-titulo">
            <span>ATRACTIVOS TURÍSTICOS</span>
          </div>
        </div>
        <div className="container">{ListadoAtractivofull}</div>
      </React.Fragment>
    );
  }
}

/*
<div class="pie">
    <span class="btn-novedades">Leer <i class="fas fa-arrow-right"></i></span>
</div>
*/
export default PListadoAtractivos;
