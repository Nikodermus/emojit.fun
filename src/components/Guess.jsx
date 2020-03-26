import PropTypes from 'prop-types';
import React from 'react';
import LetterInput from './LetterInput';

const Guess = ({ clue, answer, emoji }) => (
    <main className="guess">
        <h2 className="guess__emoji">{emoji}</h2>
        <div className="guess__input">
            <LetterInput secret={answer}></LetterInput>
        </div>

        <h3 className="guess__description">{clue}</h3>
    </main>
);

Guess.propTypes = {
    answer: PropTypes.string.isRequired,
    clue: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
};

export default Guess;
