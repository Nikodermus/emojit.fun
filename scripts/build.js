import fs from 'fs';

import { sanitizeWord } from '../src/utils/string';
import { shuffle } from '../src/utils/array';

// https://raw.githubusercontent.com/brittanyrw/emojipages/master/data.js
import books from '../tmp/books';
// https://raw.githubusercontent.com/brittanyrw/emojiscreen/master/data.js
import movie from '../tmp/movie';
// https://raw.githubusercontent.com/brittanyrw/emojibops/master/data.js
import songs from '../tmp/songs';

const items = {
    movies: shuffle(movie),
    books: shuffle(books),
    songs: shuffle(songs),
};

let result = [];

Object.entries(items).forEach(([key, arrayItem]) => {
    for (let index = 0; index < 30; index += 1) {
        const { emojiImgs, title, author, artist } = arrayItem[index];
        const newItem = {
            emoji: emojiImgs,
            answer: title,
        };

        switch (key) {
            case 'movies':
                newItem.clue = 'Movie';
                break;
            case 'books':
                newItem.clue = `${author} Book`;
                break;
            case 'songs':
                newItem.clue = `${artist[0]} Song`;
                break;

            default:
                break;
        }

        result.push(newItem);
    }
});

result = result.sort((p, n) =>
    sanitizeWord(p.answer).localeCompare(sanitizeWord(n.answer))
);

fs.writeFile('en.json', JSON.stringify(result, null, 4), () => {});

// I could run this script here and then to keep the tests fresh
