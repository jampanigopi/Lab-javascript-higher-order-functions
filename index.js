const funcSlice = () => {
    const foods = ['pizza', 'burger', 'fingerShips', 'donuts', 'springRoll'];
    const modifiedFood = foods.slice(1, foods.length - 1);
    return modifiedFood;
};

const funcSplice = () => {
    const foods = ['pizza', 'burger', 'fingerShips', 'donuts', 'springRoll'];
    foods.splice(2, 0, 'burger', 'noodles', 'icecream');
    const modifiedFood = foods;
    delete foods;
    return modifiedFood;
};

const isPrime = (n) => {
    for (let i = 2; i < parseInt(Math.pow(n, 0.5)) + 1; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
};

const isEven = (n) => {
    return n % 2 == 0;
};

const filterEven = (numberArray = [12, 324, 213, 4, 2, 3, 45, 4234]) => {
    return numberArray.filter((p) => isEven(p) == true);
};

const filterPrime = (numberArray = [12, 324, 213, 4, 2, 3, 45, 4234]) => {
    return numberArray.filter((p) => isPrime(p) == true);
};

const nonPrime = (numberArray = [12, 324, 213, 4, 2, 3, 45, 4234]) => {
    return numberArray.filter((p) => isPrime(p) == false);
};

const isEven2 = (n) => n % 2 == 0;

const findSquareOfNumbers = (myArray = [11, 34, 20, 5, 53, 16]) => {
    return myArray.map((p) => p * p);
};

const multiply = (ls = [2, 3, 5, 10]) => {
    const k = ls.reduce((prev, curr) => {
        prev *= curr;
        return prev;
    }, 1);
    return k;
};

console.log(funcSlice());
console.log(funcSplice());
console.log(filterPrime());
console.log(filterEven());
console.log(nonPrime());
console.log(findSquareOfNumbers());
console.log(multiply());