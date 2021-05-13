import React from 'react';
import HeaderLayout from '../headerLayout';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props) => {
    return shallow(<HeaderLayout />);
}

const findByAttr = (wrapper, val) => {
    return wrapper.find(val);
}

describe("<HeaderLayout> rendering withour errors", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test('render Header component  without errors', () => {
        expect(findByAttr(wrapper, '.site-layout-background')).toHaveLength(1);
    });

    test('render Breadcrumb component without errors', () => {
        expect(findByAttr(wrapper, '.breadcrumb-style')).toHaveLength(1);
    });

    test('render Breadcrumb component without errors', () => {
        expect(findByAttr(wrapper, 'BreadcrumbItem')).toHaveLength(2);
    });
})