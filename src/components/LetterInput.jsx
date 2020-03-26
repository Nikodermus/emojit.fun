import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';

const BACKSPACE_KEY = 8;
const LEFT_ARROW_KEY = 37;

const LetterInput = ({ secret }) => {
    const inputs = useRef([]);
    const parsedSecret = secret.toLowerCase().trim();

    const [value, setValue] = useState([]);

    const onChange = ({ target }) => {
        const index = inputs.current.indexOf(target);
        target.value = target.value.replace(/\W/g, '');

        const next = inputs.current[index + 1];
        if (target.value && next) {
            next.focus();
        }

        setValue((prev) => {
            prev[index] = target.value.toLowerCase().trim();
            return [...prev];
        });
    };

    const onKeyDown = ({ which, target }) => {
        const index = inputs.current.indexOf(target);

        const deleting = which === BACKSPACE_KEY;
        const movingBackwards = which === LEFT_ARROW_KEY;
        const emptyNotFirst = index && !target.value;

        if ((deleting || movingBackwards) && emptyNotFirst) {
            inputs.current[index - 1].focus();
        }
    };

    useEffect(() => {
        const emptyArray = [];
        emptyArray[parsedSecret.length - 1] = undefined;
        setValue(emptyArray);
    }, [parsedSecret.length, secret]);

    useEffect(() => {
        const phrase = value.join('');
        const validationSecret = parsedSecret.replace(/\W/g, '');

        if (phrase.length === validationSecret.length) {
            console.log(
                'validaaaando',
                phrase === validationSecret,
                phrase,
                validationSecret
            );
        }
    }, [parsedSecret, value]);

    return parsedSecret.split('').map((e) =>
        e === ' ' ? (
            <span className="letter-break" />
        ) : (
            <input
                ref={(ref) => {
                    if (inputs.current.indexOf(ref) === -1) {
                        inputs.current.push(ref);
                    }
                }}
                onChange={onChange}
                type="text"
                className="letter-input"
                maxLength="1"
                onKeyDown={onKeyDown}
            />
        )
    );
};

LetterInput.propTypes = {
    secret: PropTypes.string.isRequired,
};

export default LetterInput;
