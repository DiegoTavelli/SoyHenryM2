import React from "react";
//import { useParams } from "react-router-dom";
import styles from './Ciudad.css'


export default function Ciudad({ city }) {

  // let params = useParams()
  return (
    <div className="ciudad">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info" style={styles.titulo}>
          <div>Temperatura: {city.min} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}
