import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Person from './Person';



configure({adapter: new Adapter()})

describe('<Person />', () => {

    let wrapper;


    beforeEach(() => {

        wrapper = shallow(<Person />);
    });

    it('should display person name', () => {

        expect(wrapper.find('.person-name')).toHaveLength(1);
    });

    it('should display person name as Lilly if pass the name', () => {

        wrapper.setProps({name: 'Lilly'});
        expect(wrapper.find('.person-name').text()).toEqual('Lilly');
    });


    it('should display show more details by default', () => {
        expect(wrapper.find('.more-btn').text()).toMatch(/Show More Details/);
    });

    it('should display hide more details when display more details', () => {
        wrapper.setProps({display_more_details: true});
        expect(wrapper.find('.more-btn').text()).toMatch(/Hide More Details/);
    });
});