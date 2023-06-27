/*
    Given an array and an index,
    remove the item at that index.
    return the removed item

    If index is out of range, return null and don't alter array

    No built-in array methods except pop().

    Alter the original array, don't create a new one.
*/

const arr1 = ["a", "b", "c", "d", "e"];
const removeIdx1 = 1;
const expected1 = "b";
// after function call, arr1 should be:
const arr1Expected = ["a", "c", "d", "e"];

//             0    1     2
const arr2 = ["a", "b", "c"];
const removeIdx2 = 3;
const expected2 = null;
const arr2Expected = ["a", "b", "c"];

const arr3 = ["a", "b", "c"];
const removeIdx3 = -3;
const expected3 = null;
const arr3Expected = ["a", "b", "c"];

const arr4 = ["cake", "pie", "cookies", "vegetables", "candy"];
const removeIdx4 = 3;
const expected4 = "vegetables";
const arr4Expected = ["cake", "pie", "cookies", "candy"];

//* choose your ALGO ROLES
// DRIVER 🚗
// PRESENTER 👨‍🏫
// NAVIGATOR 🧭


function removeIndex(removeI, arr) {
  if (!arr[removeI]) {
    return null
  }
  var temp = arr[removeI]
  for (let i = removeI; i < arr.length; i++) {
    arr[i] = arr[i+1]
  }
  arr.pop()
  console.log(arr);
  return temp

}


console.log(removeIndex(removeIdx1, arr1))
// extra challenge: re-create the built-in method '.pop()'
