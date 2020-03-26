import PropTypes from 'prop-types';
import React from 'react';
import LetterInput from './LetterInput';

const Guess = ({ clue, answer, emoji, validate, celebrating }) => (
    <main className="guess">
        <h2 className="guess__emoji">{emoji}</h2>
        <div className="guess__input">
            {celebrating ? (
                <h3>
                    {answer
                        .split('')
                        .map((l) =>
                            l === ' ' ? (
                                <span className="letter-break"></span>
                            ) : (
                                <span className="letter-input">{l}</span>
                            )
                        )}
                </h3>
            ) : (
                <LetterInput secret={answer} validate={validate}></LetterInput>
            )}
        </div>

        <h3 className="guess__description">{clue}</h3>
    </main>
);

Guess.propTypes = {
    answer: PropTypes.string.isRequired,
    clue: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    validate: PropTypes.func.isRequired,
    celebrating: PropTypes.bool.isRequired,
};

export default Guess;
