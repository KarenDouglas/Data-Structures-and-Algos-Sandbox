function booo(n) {
  // the only additional spaced used in this function is: let i = 0
  for (let i = 0; i < n.length; i++) {
    console.log('boo')
  }
}



booo([1, 2, 3, 4, 5])
// time complexity o(n)
//space complexity only considers the ADDITIONAL space used. it does not consider the space used by the inputs.

// this function has the space complexity of 0(1)

function arrayOfHiNTimes(n) {
  let hiArray = [];

  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6)// O(n) space complexity