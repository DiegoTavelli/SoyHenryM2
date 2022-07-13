import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";


export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <Link to={`/`}>
          <button className="backHomeButton">Back Home</button>
        </Link>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.movies?.map(movie => {
            return (
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  {movie.title}
                </Link>
                <button className="closeButton" onClick={() => this.props.removeMovieFavorite(movie.id)} >❌</button>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesFavorites
  }
}

export default connect(
  mapStateToProps,
  { removeMovieFavorite }
)(ConnectedList);
