import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe('App components render', () => {
  let container = shallow(<App />);
  it('should render a container' , () => {
    expect(container.find('div').length).toEqual(1)
    }) ;
});