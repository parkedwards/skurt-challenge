import React from 'react';
import { shallow } from 'enzyme';
import { Results } from '../../src/views';

const setup = (timeDelayed) => {
  const props = {
    isDelayed: false,
    timeDelayed: 0
  }

  if (timeDelayed) {
    props.isDelayed = true;
    props.timeDelayed = timeDelayed;
  }

  const wrapper = shallow(<Results {...props} />);

  return { props, wrapper };
}

describe('Component: <Results /> NO DELAY', () => {
  const { wrapper } = setup();

  test('should render outer div tags', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  test('should render h3 tags with specific text', () => {
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('h3').text()).toEqual(`You're chillin and on time!`);
  });

  test('should render p tags with specific text', () => {
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual(`Your flight will land within 10 minutes of schedule`);
  });

  test('should render <Link /> components with specific destination path', () => {
    const LinkProps = wrapper.find('Link').props();
    expect(wrapper.find('Link')).toHaveLength(1);
    expect(LinkProps.to).toEqual('/');
  });
});

describe('Component: <Results /> WITH DELAY', () => {
  const { wrapper } = setup(20);

  test('should render outer div tags', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  test('should render h2 tags with specific delay text', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('Flight Delayed by 20 minutes!');
  });
  
  test('should render <Link /> components with specific destination path', () => {
    const LinkProps = wrapper.find('Link').props();
    expect(wrapper.find('Link')).toHaveLength(1);
    expect(LinkProps.to).toEqual('/');
  });

  test('should render a span tag', () => {
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('span').prop('style')).toMatchSnapshot();
  })
});
