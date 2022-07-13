import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {

        let title = this.props.movie.Title;
        let img = this.props.movie.Poster;
        let description = this.props.movie.Plot;
        let year = this.props.movie.Year;
        // let rating = this.props.movie.Ratings[0].Source;

        return (
            <div className="movie-detail">
                <h2>{title}</h2>
                <img alt='' src={img} />
                <p><strong>Resume: </strong>{description !== 'N/A' ? description : "No available description"}</p>
                <p><strong>Year: </strong>{year}</p>
                {/* <p><strong>Ratings: </strong>{rating}</p> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieDetail
    }
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);