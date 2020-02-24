import React from 'react';
import { MoviesPage, mapStateToProps } from './MoviesPage';
import { shallow } from 'enzyme';

describe('MoviesPage', () => {
  let movies
  it('should match the snapshot', () => {
    movies = [{
      id: 21,
      title: "Sonic the Hedgehog",
      "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
      "release_date": "2020-02-12",
      "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      "average_rating": 8
  }];
    const wrapper = shallow(<MoviesPage movies={movies}/>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with an array of movies', () => {
      const mockState = {
        movies: [{
          id: 21,
          title: "Sonic the Hedgehog",
          "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
          "release_date": "2020-02-12",
          "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
          "average_rating": 8
      }],
      }

      const expected = {
        movies: [{
          id: 21,
          title: "Sonic the Hedgehog",
          "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
          "release_date": "2020-02-12",
          "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
          "average_rating": 8
      }]
      }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })
  })
});