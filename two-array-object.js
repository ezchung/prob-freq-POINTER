"use strict"

// add whatever parameters you deem necessary & write docstring
/** Merge two arrays into a single object
 *
 *  Takes in an array "keys" and an array "values"
 *
 *  Returns an object
 */
function twoArrayObject(keys, values) {
  const result = {};
  for(let i = 0; i < keys.length; i++) {
    if(values[i] === undefined) {
      result[keys[i]] = null;
    }
    else {
      result[keys[i]] = values[i];
    }
  }
  return result;
}

// Problem
// Merge two arrays into a single object
  // First array is keys
  // Second array is values
// Input: Two arrays
// Output: One object
// If second array is shorter, the remaining keys should have a value of null
// If first array is shorter, ignore the remaining values

// Representation
// ([], []) => {}
// (['x', 'y', 'z'], [1, 2]) => {'x': 1, 'y': 2, 'z': null}
// (['a', 'b', 'c'], [1, 2, 3, 4]) => {'a': 1, 'b': 2, 'c': 3}

// PseudoCode
// let result = {}
// Loop thru first array
  // if second array index is undefined => assign key : null;
  // else result[firstArray[i]] = secondArray[i]
// return result
