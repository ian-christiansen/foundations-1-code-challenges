export function makeArrayOfNamesWithMap(arr) {
    const namesArray = [];
    arr.map((petName) => namesArray.push(petName.name));
    return namesArray;
}

export function makeArrayWithIsHungry(arr) {
    const petHungry = [];
    arr.map(pet => {
        petHungry.push({ name: pet.name, isHungry: true, type: pet.type });
    });
    return petHungry;
}

export function makeShoutingArray(arr) {
    const nameShout = [];
    arr.map(element => {
        nameShout.push({ name: element.name.toUpperCase(), type: element.type });
    });
    return nameShout;
}

export function makeStringArray(arr) {
    const petString = [];
    arr.map(element => {
        petString.push(element.name + element.type);
    });
    return petString;
}

export function makeArrayOfArraysOfArrays(arr) {
    const arrayArray = [];
    arr.map(arAr => {
        arrayArray.push([['name', arAr.name], ['type', arAr.type]]);
    });
    return arrayArray;
}
