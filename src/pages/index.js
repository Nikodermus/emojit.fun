import React from 'react';
import SEO from '../components/SEO';
import StaticItems from '../components/StaticItems';
import Counter from '../components/Counter';
import Guess from '../components/Guess';

const IndexPage = () => (
    <>
        <StaticItems></StaticItems>
        <Counter></Counter>
        <Guess></Guess>
        <SEO
            description="Adivina películas, libros y más, solo con 🌵💻👽"
            title="emojit ¿podrás adivinar?"
        ></SEO>
    </>
);

export default IndexPage;
