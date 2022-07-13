import React, { useState } from "react";
import styles from './Nav.module.css'


export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  return (
    <div className={styles.searchBar}>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("")
      }}>
        <input
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
}
