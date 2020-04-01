/**
 * Shuffles array in place. ES6 version
 * @param {Array} array items An array containing the items.
 */
export const shuffle = (array) => {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};
