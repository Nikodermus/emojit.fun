import React, { useState, useEffect } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import { randomInRange } from '../utils/random';
import { useLocalState } from '../utils/hooks';
import ActionItems from '../components/ActionItems';
import Counter from '../components/Counter';
import en from '../../data/en';
import es from '../../data/es';
import Guess from '../components/Guess';
import LanguageSwitch from '../components/LanguageSwitch';
import SEO from '../components/SEO';
import StaticItems from '../components/StaticItems';
import translate from '../utils/i18n';

const data = {
    en,
    es,
};

const IndexPage = () => {
    // Find the first language that exists in our data
    const [language, setLanguage] = useLocalState('language', '');

    const langData = data[language] || data.en;
    const amount = langData.length - 1;

    const [item, setItem] = useState(randomInRange(0, amount));
    const [count, setCount] = useLocalState('counter', 0);
    const [celebrating, setCelebrating] = useState(false);

    const next = () => {
        setItem((current) => {
            let newItem = randomInRange(0, amount);
            while (newItem === current) {
                newItem = randomInRange(0, amount);
            }
            return newItem;
        });
    };

    const validate = (bool) => {
        if (bool) {
            document.body.classList.add('success');
            setCount((prev) => prev + 1);
            setCelebrating(true);

            setTimeout(() => {
                setCelebrating(false);
                document.body.classList.remove('success');
                next();
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
            next();
        }, 2000);
    };

    useEffect(() => {
        trackCustomEvent({
            category: 'website',
            action: 'pageview',
            label: 'initial view',
        });

        if (!language) {
            const local = localStorage.getItem('language');
            setLanguage(
                local
                    ? JSON.parse(local)
                    : navigator?.languages.find((l) => data[l]) || 'en'
            );
        }
    }, [language, setLanguage]);

    // When we switch languages, get a new item for that language
    useEffect(() => {
        setItem(randomInRange(0, data[language].length - 1));
    }, [language]);

    if (!langData[item]) return null;

    const { description, title } = translate('seo', language);

    return (
        <>
            <StaticItems language={language}></StaticItems>
            <LanguageSwitch
                language={language}
                setLanguage={setLanguage}
                availableLanguages={Object.keys(data)}
            ></LanguageSwitch>
            <Counter count={count}></Counter>
            <Guess
                {...langData[item]}
                celebrating={celebrating}
                validate={validate}
            />
            <ActionItems language={language} resolve={resolve} next={next} />
            <SEO
                description={`${description} 🌵💻👽`}
                title={`${title} 🌵💻👽`}
            ></SEO>
        </>
    );
};

export default IndexPage;
