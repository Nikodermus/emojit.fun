import PropTypes from 'prop-types';
import React from 'react';

const ActionItems = ({ resolve, next }) => (
    <div className="action-items">
        <button type="button" onClick={resolve} className="action-items__btn">
            <figure className="bubble">
                <span className="bubble__emoji">❓</span>
                <figcaption className="bubble__text">Resolver</figcaption>
            </figure>
        </button>
        <button type="button" onClick={next} className="action-items__btn">
            <figure className="bubble">
                <span className="bubble__emoji">👉</span>
                <figcaption className="bubble__text">Siguiente</figcaption>
            </figure>
        </button>
    </div>
);

ActionItems.propTypes = {
    next: PropTypes.func.isRequired,
    resolve: PropTypes.func.isRequired,
};

export default ActionItems;
