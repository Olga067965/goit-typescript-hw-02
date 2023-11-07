// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;

// export {};


let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
    str = some; // Здійснюємо привласнення тільки, якщо тип відомий
} else {
    // Обробка випадку, коли тип не є рядком
}

export {};