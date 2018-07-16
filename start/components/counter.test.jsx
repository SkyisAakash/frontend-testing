import React from 'react';
import { shallow } from 'enzyme'
import Counter from './counter'
describe("counter", () => {
    it("starts with 0", () => {
        let container  = shallow(<Counter />);
        let counterCount = container.state().count;
        expect(counterCount).toBe(0);
    })
})