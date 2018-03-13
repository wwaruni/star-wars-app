import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';


configure({adapter: new Adapter()})

describe('<Header />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });


    it('Should display header always', () => {

        expect(wrapper.find('header')).toHaveLength(1);
    });

    it('Should display text in a h3 tag', () => {

        expect(wrapper.find('h3')).toHaveLength(1);
    });
});
