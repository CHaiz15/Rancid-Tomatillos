import React from 'react';
import { MovieDetails, mapStateToProps, mapDispatchToProps } from './MovieDetails';
import { shallow } from 'enzyme';

describe('MovieDetails', () => {
  let mockUser,mockRatings
  it('should match the snapshot', () => {
    mockUser = {
      name: 'Ken',
      id: 23
    }
    mockRatings = [
      { name: 'Sonic', rating: 6 },
      { name: 'Parasite', rating: 9 }
    ]
    const wrapper = shallow(<MovieDetails user={mockUser} ratings={mockRatings}/>);
    expect(wrapper).toMatchSnapshot();
  });
});