// Learn .reduce()

const array = [1, 2, 3, 4, 5];
// const array = [1,2,3,4,5]

const sum = array.reduce((acc, current) => acc + current, 0);

console.log(sum);

// hola me estoy equivocando

const randomStuff = () => {
  if (1 === 2) return "something is weird";
  return "everything is fine";
};
