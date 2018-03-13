import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pagination from './Pagination';

configure({adapter: new Adapter()})

describe('<Pagination />', () => {

    it('Display previous button only when there are old data', () => {

        const wrapper = shallow(<Pagination />);
        expect(wrapper.find(button)).toHaveLength(2);
    });
});