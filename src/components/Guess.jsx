import React from 'react';
import LetterInput from './LetterInput';

const Guess = () => (
    <main className="guess">
        <h2 className="guess__emoji">🌵💻👽</h2>
        <div className="guess__input">
            <LetterInput></LetterInput>
        </div>

        <h3 className="guess__description">Equipo de futbol</h3>
    </main>
);

export default Guess;
