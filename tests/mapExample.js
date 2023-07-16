let arr = [10, 20, 30];
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log(a);
let arr2 = [10, 20, 30, 0, 3, 5];
let a2 = arr2.filter((value) => {
  return value < 10;
});
console.log(a2);
