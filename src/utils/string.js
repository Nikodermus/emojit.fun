export const sanitizeWord = (string = '') =>
    string
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w ]/, '');
