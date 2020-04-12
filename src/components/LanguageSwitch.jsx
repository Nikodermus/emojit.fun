import PropTypes from 'prop-types';
import React from 'react';

const LanguageSwitch = ({ language, setLanguage, availableLanguages }) => (
    <select
        name="language"
        id="language"
        className="language-switch"
        value={language}
        onChange={({ target }) => setLanguage(target.value)}
    >
        {availableLanguages.map((l) => (
            <option value={l} key={l}>
                {l.toUpperCase()}
            </option>
        ))}
    </select>
);

LanguageSwitch.propTypes = {
    availableLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
};

export default LanguageSwitch;
