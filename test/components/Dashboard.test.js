import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../src/views';

describe('Component: <Dashboard />:', () => {
  const wrapper = shallow(<Dashboard />);
  
  test('should render outer div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').prop('style')).toMatchSnapshot();
  });

  test('should render img tag with Skurt logo', () => {
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('img').props().src).toEqual('../images/logo.png');
  });
});