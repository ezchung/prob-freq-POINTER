"use strict";

// add whatever parameters you deem necessary & write docstring
/** Check if any two numbers in an array has an average equal to a given target average
 *
 *  Takes in an array "nums" and a number "targetAvg"
 *
 *  Returns true/false
 */
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  if(nums.length < 2) return false;

  while(left < right) {
    let currAvg = ((nums[left] + nums[right]) / 2);
    if(currAvg === targetAvg) {
      return true;
    }
    else if(currAvg < targetAvg) {
      left++;
    }
    else {
      right--;
    }
  }
  return false;
}

// Problem
// Check if any two numbers in an array has an average equal to a given target average
// Inputs: Array of numbers, Target Average (number)
// Output: True/False
// Array is already sorted
// Must be a pair of numbers, cannot use same number twice
// Constraint: Time complexity: O(n)

// Representation
// ([], 4) => false
// ([1, 2, 3], 2.5) => true
// ([1, 5, 12, 16], 14) => true

// PseudoCode
// Use two pointers
  // left: move if currAverage is less than target
  // right: move if currAverage is greater than target
// if array length is less than 2 return false
// while left < right
  // let currAverage = (left + right) / 2
  // move pointers depending on the condition
  // if currAverage = targetAverage return true
// return false
