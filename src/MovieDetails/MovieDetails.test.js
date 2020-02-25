import React from 'react';
import { MovieDetails, mapStateToProps, mapDispatchToProps } from './MovieDetails';
import { shallow } from 'enzyme';
import { deleteRating } from '../apiCalls'

describe('MovieDetails', () => {
  let wrapper,mockUser,mockRatings,mockEvent,mockId
  beforeEach(() => {
    mockUser = {
      name: 'Ken',
      id: 23
    }
    mockRatings = [
      { movie_id: 23, name: 'Sonic', rating: 6 },
      { movie_id: 24, name: 'Parasite', rating: 9 }
    ]
    mockId = 23
    wrapper = shallow(<MovieDetails id={mockId} user={mockUser} ratings={mockRatings}/>);
  })
  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should handleChange', () =>{
    mockEvent = {
      preventDefault: jest.fn(),
      target: {
        value: 7
      }
    }
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('currentMovieRating')).toEqual(7)
  })

  it('should call updateRatings on click', () =>{
    wrapper.instance().updateRatings = jest.fn()
    wrapper.find('input').simulate('click')
    expect(wrapper.instance().updateRatings).toHaveBeenCalled()
  })
});