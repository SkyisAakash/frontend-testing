import React from 'react';
import { shallow } from 'enzyme'
import Counter from './counter'
import Foo from './foo'
describe("counter", () => {
    it("starts with 0", () => {
        let container  = shallow(<Counter />);
        let counterCount = container.state().count;
        expect(counterCount).toBe(0);
    })

    it("renders foos", () => {
        let container = shallow(<Counter />);
        expect(container.find("Foo").length).toBe(0);
        container.find("button.add1").simulate("click");
        expect(container.find("Foo").length).toBe(1);
        container.find("button.add1").simulate("click");
        container.find("button.add1").simulate("click");
        container.find("button.add1").simulate("click");
        expect(container.find("Foo").length).toBe(4);
    })
})