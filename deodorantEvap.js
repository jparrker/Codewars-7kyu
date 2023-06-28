function evaporator(content, evap_per_day, threshold) {
  let result = 0;
  content = 100;

  while (content >= threshold) {
    content -= (content * evap_per_day) / 100;
    result++;
  }
  return result;
}
