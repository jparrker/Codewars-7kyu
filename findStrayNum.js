// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//if current indexOf === lastIndexOf, we know the number is only there once.

function stray(numbers) {
  for (let num in numbers) {
    if (numbers.indexOf(numbers[num]) === numbers.lastIndexOf(numbers[num])) {
      return numbers[num];
    }
  }
}
