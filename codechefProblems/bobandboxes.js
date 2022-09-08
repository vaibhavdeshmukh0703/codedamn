//  Bob is planning a trip, but there is one problem.
// Bob has N boxes of weight W1, W2, ..., WN. He is quite superstitious and wants to carry exactly K boxes with him as K is his lucky number. He also wants sum of weights of the K boxes to be in the range [L,R] only. What a stupid condition!
// Can you help Bob find number of ways he can choose exactly K boxes out of N available boxes such that sum of weights of the chosen boxes lies in given range [L,R]? Print answer modulo 1000000007.
// Input
// First line of input consists of an integer N denoting number of boxes.
// Next line consists of N interes denoting weight of the boxes W1, W2, ..., WN.
// Next line consists of three integers K, L and R denoting number of boxes to be chosen and the limits of the range.
// Example
// Input:
// 5
// 2 4 1 5 3
// 3 8 9

// Output:
// 4

// Explanation

// Example case 1: 4 possible ways are {1,2,5}, {1,3,4}, {1,3,5} and {2,3,4}.

// function bobAndBoxes(boxes,weights,boxesChosen,rangeLimits) {

// return ;
// }
// console.log(bobAndBoxes(5,[2,4,1,5,3],3,[8,9]))
//
function continouseArray(nums) {
  let nonContinouseArrayIndex = 0,
    product = 1;
  console.log(nums);
  for (i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums.splice(i);
    }
  }
  console.log(nums);
  nums.forEach((element) => {
    product *= element;
  });
  return product;
}

console.log(continouseArray([1, 2, -2]));
