import PropTypes from 'prop-types';
import React from 'react';
import translate from '../utils/i18n';

const ActionItems = ({ resolve, next, language }) => {
    const { next: nextText, solve } = translate('buttons', language);

    return (
        <div className="action-items">
            <button
                type="button"
                onClick={resolve}
                className="action-items__btn"
            >
                <figure className="bubble">
                    <span className="bubble__emoji">❓</span>
                    <figcaption className="bubble__text">{solve}</figcaption>
                </figure>
            </button>
            <button type="button" onClick={next} className="action-items__btn">
                <figure className="bubble">
                    <span className="bubble__emoji">👉</span>
                    <figcaption className="bubble__text">{nextText}</figcaption>
                </figure>
            </button>
        </div>
    );
};

ActionItems.propTypes = {
    next: PropTypes.func.isRequired,
    resolve: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
};

export default ActionItems;
