import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import People from './People';



configure({adapter: new Adapter()})

describe('<People />', () => {

    let wrapper;


    beforeEach(() => {

        wrapper = shallow(<People />);
    });

    it('should display main header text', () => {

        expect(wrapper.find('.mdl-card__supporting-text h4').text()).toMatch(/Star Wars Charactors/);
    });

    it('should display main header text', () => {
        expect(wrapper.find('Pagination')).toHaveLength(0);
    });

    it('should display loader first time', () => {
        expect(wrapper.find('.loader')).toHaveLength(1);
    });


});