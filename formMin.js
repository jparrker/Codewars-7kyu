function minValue(values){
  //set, sort
  return +[...new Set(values)].sort().join("")
}