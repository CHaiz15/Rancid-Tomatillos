import React from 'react';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { shallow } from 'enzyme';

describe('Login', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});