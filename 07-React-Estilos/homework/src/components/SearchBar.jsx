import React from 'react';
import styles from '../App.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input className="" type="text" placeholder='Add New City...'></input>
      <a ></a>
      <button className={styles.searchButton}>Add</button>
    </div>)
};