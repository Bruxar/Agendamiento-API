import React, { useState, useEffect } from 'react';
import Filtros from './Filtros';
import { useParams, useLocation } from 'react-router-dom';

import '../App.css';
import '../styles/PagBusqueda.css';

function PagBusqueda() {
  const [paquetes, setPaquetes] = useState([]); // Inicializa paquetes como un array vacío
  const { id_paquete } = useParams();
  const location = useLocation(); // Usa useLocation para obtener la ubicación actual

  useEffect(() => {
    // Obtiene el parámetro de la URL y lo convierte a objetos JSON
    const { pathname } = location;
    const packagesParam = pathname.split('/').pop();
    const packagesJSON = decodeURIComponent(packagesParam);
    const packages = JSON.parse(packagesJSON);

    if (packages && Array.isArray(packages)) {
      setPaquetes(packages);
    }
  }, [location]);

  // const filtrarPaquetes = (filtro) => {
  //   // Implementa la lógica de filtrado aquí
  //   const paquetesFiltrados = PaquetesMock.filter(filtro);
  //   setPaquetes(paquetesFiltrados);
  // };

  return (
    <div className="PagBusqueda">
      <div className="sidebar">
        {/* <Filtros filtrarPaquetes={filtrarPaquetes} /> */}
      </div>
      <div className="body">
        <h1>Paquetes</h1>
        <ul>
          {paquetes.map((paquete) => (
            <li key={paquete.id_paquete}>
              <h2>{paquete.nombre_paquete}</h2>
              <p>Descripción: {paquete.desc_paquete}</p>
              <p>Detalle: {paquete.detalle_paquete}</p>
              <p>Fecha de inicio: {paquete.fechaInit}</p>
              <p>Fecha de fin: {paquete.fechaFin}</p>
              <p>Cantidad de días: {paquete.cant_dias}</p>
              <p>Precio del viaje: ${paquete.pr_viaje}</p>
              <p>Precio por noche: ${paquete.pr_noche}</p>
              <p>Precio total: ${paquete.pr_total}</p>
              <p>Ciudad de origen: {paquete.ciudad_origen}</p>
              <p>Ciudad de destino: {paquete.ciudad_destino}</p>
              <p>Nombre del hotel: {paquete.nombre_hotel}</p>
              <p>Descripción del hotel: {paquete.desc_hh}</p>
              <p>Servicios del hotel: {paquete.servicios_hh}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PagBusqueda;
