import React, { useState } from 'react';

import { randomInRange } from '../utils/random';
import { useLocalState } from '../utils/hooks';
import Counter from '../components/Counter';
import data from '../data';
import Guess from '../components/Guess';
import SEO from '../components/SEO';
import StaticItems from '../components/StaticItems';

const amount = data.length - 1;

const IndexPage = () => {
    const [item, setItem] = useState(randomInRange(0, amount));
    const [count, setCount] = useLocalState('counter', 0);
    const [celebrating, setCelebrating] = useState(false);

    const validate = (bool) => {
        if (bool) {
            document.body.classList.add('success');
            setCount((prev) => prev + 1);
            setCelebrating(true);

            setTimeout(() => {
                setCelebrating(false);
                document.body.classList.remove('success');
                setItem((current) => {
                    let newItem = randomInRange(0, amount);
                    while (newItem === current) {
                        newItem = randomInRange(0, amount);
                    }
                    return newItem;
                });
            }, 2000);
        } else {
            document.body.classList.add('failure');
            setTimeout(() => {
                document.body.classList.remove('failure');
            }, 2000);
        }
    };

    const resolve = () => {
        setCelebrating(true);
        document.body.classList.add('failure');
        setTimeout(() => {
            setCelebrating(false);
            document.body.classList.remove('failure');
            setItem((current) => {
                let newItem = randomInRange(0, amount);
                while (newItem === current) {
                    newItem = randomInRange(0, amount);
                }
                return newItem;
            });
        }, 2000);
    };

    return (
        <>
            <StaticItems></StaticItems>
            <Counter count={count}></Counter>
            <Guess
                {...data[item]}
                celebrating={celebrating}
                validate={validate}
            ></Guess>
            <button onClick={resolve} type="button">
                resolve
            </button>
            <SEO
                description="Adivina películas, libros y más, solo con 🌵💻👽"
                title="emojit ¿podrás adivinar?"
            ></SEO>
        </>
    );
};

export default IndexPage;
