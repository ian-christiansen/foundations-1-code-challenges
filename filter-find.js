export function getAllDairy(arr) {
    const groceries = arr.filter(groceries => groceries.category === 'dairy');
    return groceries;
}

export function getAllFruitsThatCostMoreThanTwo(arr) {
    const fruits = arr.filter(groceries => groceries.category === 'fruit');
    const groceries = fruits.filter(fruits => fruits.price > 2);
    return groceries;
}

export function findTheCheese(arr) {
    const cheese = arr.find(groceries => groceries.id === 'cheese');
    return cheese;
}

export function listNamesOfAllFruits(arr) {
    const fruitNames = arr.filter(fruitNames=> fruitNames.category === 'fruit');
    const fruits = fruitNames.map(fruits => fruits.id);
    return fruits;
}