import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer'
describe('App components render', () => {
    let container = shallow(<Timer />);
    it('should render a timer', () => {
            expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    });
});