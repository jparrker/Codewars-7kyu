/*
function :-checkConcatenatedSum
inputs:- integers representing orginal number and number of times each digit should be repeated
output:- true of concatenated sum gives orginal number else false


*/
function checkConcatenatedSum(number, n) {
  const isNeg = number < 0
  const string = number.toString()
  let result = 0
  for(let i = isNeg ? 1: 0; i < string.length; i++) {
    const char = string[i]
    const conCat  = char.repeat(n)
    result += +conCat
  }
  if(isNeg) result = -result
  return number === result
}