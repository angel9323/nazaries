import React from 'react';
import MainLayout from '../mainLayout'
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });


const setup = (props) => {
    return shallow(<MainLayout />);
}

const findByAttr = (wrapper, val) => {
    return wrapper.find(val);
}

describe("<MainLayout> rendering withour errors all components", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test('render Layouts components without errors', () => {
        expect(findByAttr(wrapper, 'Layout')).toHaveLength(2);
    });

    test('render Sidebar component without errors', () => {
        expect(findByAttr(wrapper, 'Sidebar')).toHaveLength(1);
    });

    test('render layout component without errors', () => {
        expect(findByAttr(wrapper, '.site-layout')).toHaveLength(1);
    });

    test('render HeaderLayout component without errors', () => {
        expect(findByAttr(wrapper, 'HeaderLayout')).toHaveLength(1);
    });

    test('render ContentLayout component without errors', () => {
        expect(findByAttr(wrapper, 'ContentLayout')).toHaveLength(1);
    });
})