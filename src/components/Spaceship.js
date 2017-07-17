// Code The Spaceship Component Here

import React from 'react';

export default class Spaceship extends React.Component {
  render ()  {
    const { name, speed, hasRockets, colors } = this.props

    return (
      <div>
        <h1>Spaceship Name: {name}</h1>
        <p>Ship Info:</p>
        <p>Speed: {speed}</p>
        <p>Rockets: {hasRockets ? "Yes" : "No"}</p>
        <p>Colors: </p>
        <ul>
          {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

/*
ReactDOM.render(
  <Spaceship
    name="Jurassic World"
  />,
  document.getElementById('root')
);


class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
          src={this.props.poster}
          alt={this.props.title}
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(', ')}</small>
      </div>
    )
  }
}

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};

const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    genres={jurassicWorldGenres}
  />,
  document.getElementById('root')
);

*/
