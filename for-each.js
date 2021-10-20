export function makeArrayOfNames(arr) {
    const namesArray = [];
    arr.forEach((element) => namesArray.push(element.name));
    return namesArray;
}

export function makeReversedArrayOfTypes(arr) {
    const typesReversed = [];
    arr.forEach((type) => typesReversed.push(type.type));
    return typesReversed.reverse();
}

export function makeSpanishLanguageArray(arr) {
    const petsSpanish = [];
    arr.forEach((key) => petsSpanish.push({
        nombre: `${key.name}`,
        tipo: `${key.type}`,
    })
    );
    return petsSpanish;
}
