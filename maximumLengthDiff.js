// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1;
  // get array of lens
  let l1Lens = a1.map((word) => word.length);
  let l2Lens = a2.map((word) => word.length);
  return Math.max(
    Math.max(...l1Lens) - Math.min(...l2Lens),
    Math.max(...l2Lens) - Math.min(...l1Lens)
  );
}
