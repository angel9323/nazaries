import React from 'react';
import InputApp from '../inputApp';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch
}));

const mockSetNameDoc = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetNameDoc]
}))

const setup = (props) => {
    return shallow(<InputApp />);
}

const findByAttr = (wrapper, val) => {
    return wrapper.find(val);
}


describe("<InputApp> rendering withour errors", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test('exists wrapper', () => {
        expect(wrapper.exists()).toBe(true)
    });

    test('render input component  without errors', () => {
        expect(findByAttr(wrapper, '.inputApp-style')).toHaveLength(1);
    });

    test('render button component without errors', () => {
        expect(findByAttr(wrapper, '.buttonAddNew-style')).toHaveLength(1);
    });
})

describe("<InputApp> simulate events", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test('simulate click on button', () => {
        const wrapper = shallow(<InputApp />)

        findByAttr(wrapper, '.buttonAddNew-style').simulate('click');
        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    test('simulate change input component', () => {
        const wrapper = shallow(<InputApp />)

        const mockedEvent = {
            target: {
                value: "new document"
            }
        }
        findByAttr(wrapper, '.inputApp-style').simulate('change', mockedEvent);
        expect(mockSetNameDoc).toHaveBeenCalledTimes(1);
        expect(mockSetNameDoc).toHaveBeenCalledWith("new document");
    });

})