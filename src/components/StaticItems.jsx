import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import translate from '../utils/i18n';

const StaticItems = ({ language }) => (
    <nav className="static-items">
        <div className="static-items__item main-logo">
            <Link to="/">
                <h1>
                    emoj<span className="main-logo__highlight">it</span>
                </h1>
            </Link>
        </div>
        <a
            href="https://www.linkedin.com/in/nikodermus/"
            target="_blank"
            rel="noopener noreferrer"
            className="static-items__item author"
        >
            <figure className="bubble">
                <span className="bubble__emoji">💻</span>
                <figcaption className="bubble__text">@nikodermus</figcaption>
            </figure>
        </a>
        <a
            href="https://github.com/Nikodermus/emojit.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="static-items__item contribuiting"
        >
            <figure className="bubble">
                <span className="bubble__emoji">🗣</span>
                <figcaption className="bubble__text">
                    {translate('static.contribute', language)}
                </figcaption>
            </figure>
        </a>
    </nav>
);

StaticItems.propTypes = {
    language: PropTypes.string.isRequired,
};

export default StaticItems;
