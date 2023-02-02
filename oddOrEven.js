function oddOrEven(array) {
  const result = array.reduce((acc, current) => acc + current, 0);
  return result % 2 == 0 ? "even" : "odd";
}
