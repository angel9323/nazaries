import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders App', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find("MainLayout")).toHaveLength(1);
});
