function repeats(arr){
  return arr.filter((el, i, arr) => arr.indexOf(el) == arr.lastIndexOf(el)).reduce((acc, c) => acc+c, 0)
};