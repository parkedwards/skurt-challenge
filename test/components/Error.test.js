import React from 'react';
import { shallow } from 'enzyme';
import { Error } from '../../src/views';

describe('Component: <Error />', () => {
  const wrapper = shallow(<Error />);
  
  test('should render outer div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  test('should render h3 tags with specific text', () => {
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('h3').text()).toEqual('Invalid Input.  Please Try Again');
  });

  test('should render <Link /> component with specific destination path', () => {
    const LinkProps = wrapper.find('Link').props();
    expect(wrapper.find('Link')).toHaveLength(1);
    expect(LinkProps.to).toEqual('/');
  });

  test('<Link /> tags should render with specific inner text', () => {
    expect(wrapper.find('Link').children().nodes[0]).toEqual('< ');
    expect(wrapper.find('Link').children().nodes[1]).toEqual('Check Another Flight');
  })
});
