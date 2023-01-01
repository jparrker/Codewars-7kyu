function nbYear(p0, percent, aug, p) {
  let count = 0;
  for (count; p0 < p; count++) {
    p0 += ((p0 * percent) / 100 + aug) | 0;
  }
  return count;
}
