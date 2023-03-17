function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  for (years; principal < desired; years++) {
    principal += principal * interest * (1 - tax);
  }
  return years;
}
