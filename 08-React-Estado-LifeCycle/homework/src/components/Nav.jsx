import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';


function Nav({ onSearch }) {
  return (
    <nav className={styles.navig}>
      <img src={Logo} className={styles.logo} alt="Logo Soy Henry" />
      <h4 className={styles.h4Nav}> Henry Weather App </h4>
      <SearchBar onSearch={onSearch} />
      {/* <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </nav>
  );
};

export default Nav;
