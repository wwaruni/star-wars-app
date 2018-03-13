import React from 'react';
import './Pagination.css';

const pagination = (props) => (

        <div className="pagination">
            { props.show_prev_btn ?
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={props.handle_previous}>
                    <i className="fas fa-caret-left"></i> Previous
                </button>
                : ''
            }


            { props.show_next_btn ?
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored move-right" onClick={props.handle_next}>
                    Next <i className="fas fa-caret-right"></i>
                </button>
            : ''
            }

        </div>

);

export default pagination;