import React from 'react';
import { MovieThumbnail } from './MovieThumbnail';
import { shallow } from 'enzyme';

describe('MovieThumbnail', () => {
  let movie
  it('should match the snapshot', () => {
    movie = {
      id: 21,
      title: "Sonic the Hedgehog",
      "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
      "release_date": "2020-02-12",
      "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      "average_rating": 8
  };
    const wrapper = shallow(<MovieThumbnail movie={movie}/>);

    expect(wrapper).toMatchSnapshot();
  });
});