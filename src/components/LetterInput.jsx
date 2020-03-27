import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import { sanitizeWord } from '../utils/string';

const BACKSPACE_KEY = 8;

const LetterInput = ({ secret, validate }) => {
    const inputs = useRef([]);
    const [value, setValue] = useState([]);

    const parsedSecret = sanitizeWord(secret);
    console.log(parsedSecret);

    const onChange = ({ target }) => {
        const index = inputs.current.indexOf(target);
        target.value = target.value.replace(/\W/g, '');

        setValue((prev) => {
            prev[index] = target.value.toLowerCase().trim();
            return [...prev];
        });

        const next = inputs.current[index + 1];

        if (target.value && next) {
            next.focus();
        }
    };

    const onKeyDown = ({ which, target }) => {
        const index = inputs.current.indexOf(target);

        const deleting = which === BACKSPACE_KEY;
        const previous = inputs.current[index - 1];

        if (deleting && previous && !target.value) {
            previous.focus();
        }
    };

    useEffect(() => {
        inputs.current.forEach((input) => {
            input.value = '';
        });

        inputs.current = [];
        const emptyArray = [];
        emptyArray[parsedSecret.length - 1] = undefined;
        setValue(emptyArray);
    }, [parsedSecret.length, secret]);

    useEffect(() => {
        const phrase = value.filter(Boolean).join('');
        const validationSecret = parsedSecret.replace(/\W/g, '');

        if (phrase.length === validationSecret.length) {
            const isMatch = phrase === validationSecret;
            validate(phrase === validationSecret);

            if (isMatch) {
                const emptyArray = [];
                emptyArray[parsedSecret.length - 1] = undefined;
                setValue(emptyArray);
            }
        }
    }, [parsedSecret, validate, value]);

    return parsedSecret.split(' ').map((word) => (
        <div className="letter-break">
            {word.split('').map(() => (
                <input
                    ref={(ref) => {
                        if (ref && inputs.current.indexOf(ref) === -1) {
                            inputs.current.push(ref);
                            if (inputs.current.length === 1) ref.focus();
                        }
                    }}
                    onChange={onChange}
                    type="text"
                    className="letter-input"
                    maxLength="1"
                    onKeyDown={onKeyDown}
                />
            ))}
        </div>
    ));
};

LetterInput.propTypes = {
    secret: PropTypes.string.isRequired,
};

export default LetterInput;
