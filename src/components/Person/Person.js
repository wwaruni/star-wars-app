import React, {Component} from 'react';
import './Person.css';

const person = (props) => (
    <div className="mdl-cell mdl-cell--6-col">
        <div className="person-card mdl-card mdl-shadow--2d">
            <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">{props.name}</h2>
            </div>
            <div className="mdl-card__supporting-text custom-text">
                {props.display_more_details ?
                    <ul className='mdl-list'>
                        <li className="mdl-list__item">Height: {props.height}</li>
                        <li className="mdl-list__item">Hair color: {props.hair_color}</li>
                        <li className="mdl-list__item">Birth year: {props.birth_year}</li>
                        <li className="mdl-list__item">Home world: {props.homeworld_name}</li>
                    </ul>
                :
                null}
            </div>

            <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={props.show_more}>
                    {props.display_more_details ? <span> Hide More Details </span>: <span> Show More Details </span>}
                </a>
            </div>
        </div>
    </div>

);

export default person;