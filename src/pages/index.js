import React, { useState } from 'react';
import SEO from '../components/SEO';
import StaticItems from '../components/StaticItems';
import Counter from '../components/Counter';
import Guess from '../components/Guess';
import data from '../data';
import { randomInRange } from '../utils/random';

const amount = data.length - 1;

const IndexPage = () => {
    const [item, setItem] = useState(randomInRange(0, amount));

    return (
        <>
            <StaticItems></StaticItems>
            <Counter></Counter>
            <Guess {...data[item]}></Guess>
            <SEO
                description="Adivina películas, libros y más, solo con 🌵💻👽"
                title="emojit ¿podrás adivinar?"
            ></SEO>
        </>
    );
};

export default IndexPage;
