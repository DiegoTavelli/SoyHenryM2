import React from 'react';
import styles from '../App.module.css';




export default function Card({ min, max, name, img, onClose }) {
  // acá va tu código
  let minParsed = parseInt(min);
  let maxParsed = parseInt(max);
  let inv = `{\f}`
  return (
    <div>
      <button className={styles.closeBtn} onClick={onClose}>X</button>
      <h4 className={styles.exClass}>{name}</h4>
      <div className={styles.cards}>
        <div><strong><p className={styles.minimum} > 🥶 {` Min~ `}  </p></strong>
          <strong><p>{` ${minParsed} ℃ `}</p></strong>
        </div>
        <div><strong><p className={styles.maximum} > 🥵 {` Max~  `} </p></strong>
          <strong><p>{`${maxParsed} ℃  `}</p></strong>
        </div>

        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="cloud" />
      </div>
    </div>)
};