


// return masked string
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#')
}

//loop version

function doMask(cc) {
  cc = cc.split("")
  for(let i = 0; i < cc.length - 4; i++) {
    cc[i] = "#"
  }

  return cc.join("")
}