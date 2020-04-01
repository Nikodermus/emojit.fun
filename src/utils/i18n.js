import get from 'lodash.get';

import en from '../locale/en';
import es from '../locale/es';

const data = {
    en,
    es,
};

const translate = (path, language) => get(data[language], path);

export default translate;
