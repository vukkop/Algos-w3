/*
    Array: Second-Largest

    Return the second-largest element of an array, or null if there is none.

    Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

// JSDOCS
/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */



// function secondLargest(nums = []) {
//     //checks if there are at least two elements
//     if (nums.length < 2){
//         return null;
//     }
//     // decolares & initalizes variables
//     var largest = nums[0];
//     var secondLargest = null;

//     //normal loop through entire array
//     for (let i = 0; i < nums.length; i++){
//         //checks that the next value is greater than the previous value
//         if (nums[i] > largest){
//             secondLargest = largest;    //If the next value is greater, it sets the previous value to the secondLargest
//             largest = nums[i];          //sets the new largest
//         }
//         // If checks to make sure secondLargest is less than the value of the current iterator and not an identical number
//         if (nums[i] > secondLargest && nums[i] != largest){
//             secondLargest = nums[i];
//         }

//     }

//     return secondLargest
// }


function secondLargest(nums = []) {
  let largest = nums[0];
  let secondL = 0;
  if (nums.length < 2) {
    return null;
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > secondL && nums[j] < largest) {
      secondL = nums[j];
    }
  }
  if (secondL == 0) {
      return null;
  }
  return secondL;
}
