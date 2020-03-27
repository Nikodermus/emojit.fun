import fs from 'fs';

import data from '../data.json';
import { sanitizeWord } from '../utils/string';

fs.writeFile(
    './data.json',
    JSON.stringify(
        data.sort((p, n) =>
            sanitizeWord(p.answer).localeCompare(sanitizeWord(n.answer))
        ),
        null,
        4
    ),
    () => {}
);
