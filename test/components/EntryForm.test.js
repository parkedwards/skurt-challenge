import React from 'react';
import { mount } from 'enzyme';
import { EntryForm } from '../../src/views';

const setup = () => {
  const props = {
    onSubmit: jest.fn()
  };

  const wrapper = mount(<EntryForm {...props} />);

  return { props, wrapper };
};

describe('Component: <EntryForm />', () => {
  const { props, wrapper } = setup();

  test('should render a form element', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  test('form element should have onSubmit handler', () => {
    expect(wrapper.find('form').props().onSubmit).toBeTruthy();
  })

  test('form element handler should trigger onSubmit prop fn', () => {
    wrapper.find('input').node.value = 'test';
    wrapper.find('form').props().onSubmit({ preventDefault: () => { } });
    expect(props.onSubmit.mock.calls.length).toBe(1);
  });

  test('should render input element within form', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  test('input form should have specific prop text', () => {
    const inputProps = wrapper.find('input').props();
    expect(inputProps.placeholder).toEqual('Enter Flight Number');
    expect(inputProps.className).toEqual('form-control');
  });

  test('should render button with a submit type', () => {
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').props().type).toEqual('submit');
  });

  test('should render button with specific text', () => {
    expect(wrapper.find('button').text()).toEqual('Find Flight Info');
  })
});