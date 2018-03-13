import React, {Component} from 'react';
import Person from '../../components/Person/Person';
import Pagination from '../../components/Pagination/Pagination';
import axios from 'axios';
import './People.css';
import InfiniteScroll from 'react-infinite-scroll-component';

class People extends Component {

    state = {
        people: [],
        nextUrl: null,
        previousUrl: null,
        showPrevBtn: false,
        showNextBtn: false,
        loading: true
    }
    componentDidMount () {

        
        axios.get(process.env.REACT_APP_API_URL)
            .then(response => {

                this.apiResponseHandler(response);

            });


    }

    // Central place to handle API response data
    apiResponseHandler = (response) => {

        try {

            this.setState({people: response.data.data.results});
            this.setState({nextUrl: response.data.pagination.next});
            this.setState({previousUrl: response.data.pagination.previous});
            this.setState({loading: false});

            var showPrevBtn = (this.state.previousUrl !== null && this.state.previousUrl !== '') ? true: false;
            var showNextBtn = (this.state.nextUrl !== null && this.state.nextUrl !== '') ? true: false;

            this.setState({showPrevBtn: showPrevBtn});
            this.setState({showNextBtn: showNextBtn});


        } catch(ex) {
                console.log(ex);
        }

    }

    // Display more details section
    togglePersonDetailsHandler = (id) => {

        var people                      = this.state.people;
        people[id].display_more_details = ! people[id].display_more_details;

        if (people[id].display_more_details) {
            this.prepareHomeworldHandler(people, id);
        }

        this.setState({
            people: people
        });

    }

    // Display homeworld details
    prepareHomeworldHandler = (people, id) => {

        const person = people[id];
        var url      = person['homeworld'];

        axios.get(url)
            .then(response => {

            try {

                var homeworld             = (typeof response.data.name !== 'undefined') ? response.data.name : '';
                people[id].homeworld_name = homeworld;

                this.setState({
                    people: people
                });

            } catch(ex) {
                console.log(ex);
            }


        });
    }

    // Get data based on next or previous button click
    paginationHandler = (type) => {

        var url  = '';

        switch (type) {

            case 'next':
                url = this.state.nextUrl;
                break;
            case 'prev':
                url = this.state.previousUrl;
                break;
        }

        if (url !== '') {
            axios.get(url)
                .then(response => {

                    this.apiResponseHandler(response);

            });

        }

    }

    

    render() {

        const people = this.state.people.map((person, index) => {
                return <Person
                            key={index}
                            name={person.name}
                            gender={person.gender}
                            height={person.height}
                            hair_color={person.hair_color}
                            birth_year={person.birth_year}
                            show_more={() => this.togglePersonDetailsHandler(index)}
                            homeworld_name={person.homeworld_name}
                            display_more_details={person.display_more_details}
                        />
            }

        );

        return (
            <div className="mdl-layout__tab-panel is-active" id="overview">
                <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                    <div className="mdl-card mdl-cell mdl-cell--12-col custom-bg">
                        <div className="mdl-card__supporting-text">
                            <h4>Star Wars Charactors</h4>

                            <Pagination
                                display={this.state.loading}
                                handle_next={() => this.paginationHandler('next')}
                                handle_previous={() => this.paginationHandler('prev')}
                                show_prev_btn={this.state.showPrevBtn}
                                show_next_btn={this.state.showNextBtn}
                             />

                            { this.state.loading ? <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate loader"> </div> :
                                <div className="mdl-grid">
                                    {people}
                                </div>
                            }

                            <Pagination
                                display={this.state.loading}
                                handle_next={() => this.paginationHandler('next')}
                                handle_previous={() => this.paginationHandler('prev')}
                                show_prev_btn={this.state.showPrevBtn}
                                show_next_btn={this.state.showNextBtn}
                            />

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default People;
