// Learn .reduce()

const array = [1, 2, 3, 4, 5];
// const array = [1,2,3,4,5]

const sum = array.reduce((acc, current) => acc + current, 0);

console.log(sum);