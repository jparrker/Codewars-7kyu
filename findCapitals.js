const capitals = function (word) {
  return word
    .split("")
    .map((letter, index) => {
      if (letter === letter.toUpperCase()) {
        return index;
      }
    })
    .filter((item) => item != null);
};

//loop
const findCapitals = function (word) {
  let caps = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) caps.push[i];
  }
  return caps;
};
