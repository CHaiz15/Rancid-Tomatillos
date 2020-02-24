import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { loadMovies } from '../actions';

describe('App', () => {
  let wrapper,mockState
  it.skip('should match the snapshot', () => {
    wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
  
  describe('mapStateToProps', () => {
    it('should return an object with movies and a user', () => {
      mockState = {
        movies: [{
          id: 21,
          title: "Sonic the Hedgehog",
          "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
          "release_date": "2020-02-12",
          "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
          "average_rating": 8
        }],
        user: {
          name: 'Ken'
        }
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
        }],
        user: {
          name: 'Ken'
        }
    }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the dispatch(loadMovies) action when loadMovies(movies) is called', () => {
      const mockDispatch = jest.fn();
      const movies = [{
        id: 21,
        title: "Sonic the Hedgehog",
        "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
        "release_date": "2020-02-12",
        "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
        "average_rating": 8
      }];
      const actionToDispatch = loadMovies(movies);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadMovies(movies);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
});