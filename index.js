function sumItems(array) {
  // Sum all the numbers in the array

  let sum = 0;
  for (item of array) {

    if (!Array.isArray(item)) {
      sum += item;
    } else {
      sum += sumItems(item);
    }
    // console.log(sum);
  }
  return sum;
}

module.exports = sumItems;

console.log(sumItems([1, 2, 3, 4, 5]));
console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]));

// function printItemsRecursive(array) {
//   for (item of array) {
//     if (!Array.isArray(item)) {
//       console.log(item);
//     } else {
//       printItemsRecursive(item);
//     }
//   }
// }