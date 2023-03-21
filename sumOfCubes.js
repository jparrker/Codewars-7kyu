function sumCubes(n) {
  let result = 0;
  while (n > 0) {
    result += n ** 3;
    n--;
  }
  return result;
}
