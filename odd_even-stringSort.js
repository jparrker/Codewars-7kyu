// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)


function sortMyString(S) {
    let even = ''
    let odd = ''
    for (let i = 0; i < S.length; i++) {
      i == 0 || i % 2 == 0 ? even += S[i] : odd += S[i]
    }
    return  even + ' ' + odd;
}