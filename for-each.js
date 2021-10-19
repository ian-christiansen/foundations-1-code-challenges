// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const namesArray = [];
    arr.forEach((element) => namesArray.push(element.name));
    return namesArray;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const typesReversed = [];
    arr.forEach((type) => typesReversed.push(type.type));
    return typesReversed.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const petsSpanish = [];
    arr.forEach((key) => petsSpanish.push({
        nombre: `${key.name}`,
        tipo: `${key.type}`,
    })
    );
    return petsSpanish;
}
