import React from 'react';
import { shallow } from 'enzyme';
import { Lookup } from '../src/views';

const setup = () => {
  const props = {
    onFlightSubmit: jest.fn()
  };

  const wrapper = shallow(<Lookup {...props} />);

  return { props, wrapper };
};

describe('Component: <Lookup />', () => {
  const { wrapper, props } = setup();

  test('should render enclosing div elements', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  test('should have h2 tag with specific text', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('Search your Flight');
  });

  test('should render inner EntryForm component ', () => {
    const EntryFormProps = wrapper.find('EntryForm').props();
    expect(wrapper.find('EntryForm')).toHaveLength(1);
    expect(EntryFormProps.onSubmit).toBeTruthy();
  });

  test('EntryForm should trigger a mock call on prop function', () => {
    const EntryFormProps = wrapper.find('EntryForm').props();
    EntryFormProps.onSubmit();
    expect(props.onFlightSubmit.mock.calls.length).toBe(1);
  });
});
