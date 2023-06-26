/*
    Write a function that takes a non-empty array of distinct integers and an integer representing a target sum.
    If any two numbers in the input array sum up to the target sum, the function should return their indices in an array, in any order.
    Note that the target sum has to be obtained by summing two different integers in the same array.
    You can't add a single integer to itself in order to obtain the target sum.
    You can assume that there will be at most one pair of numbers summing up to the target sum.

    In other words:
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
 */

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// --------------//

var nums = [2, 7, 11, 15]
var target = 9;

function sumTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j]
      }
    }
  }
}

console.log(sumTarget(nums, target));
