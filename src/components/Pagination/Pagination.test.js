import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pagination from './Pagination';

configure({adapter: new Adapter()})

describe('<Pagination />', () => {

    it('Should not display any buttons by default', () => {

         const wrapper = shallow(<Pagination />);
         expect(wrapper.find('button')).toHaveLength(0);
    });

    it('Display previous button only when show previous is set', () => {

        const wrapper = shallow(<Pagination show_prev_btn/>);
        expect(wrapper.find('.prev-btn')).toHaveLength(1);
    });

    it('Display next button only when show next is set', () => {

        const wrapper = shallow(<Pagination show_next_btn/>);
        expect(wrapper.find('.next-btn')).toHaveLength(1);
    });
});