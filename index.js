// when I create this object each key value pair will be stored somewhere in memory at different addresses
// these should be used in a lot of cases
// problems with hash tables: with enough data hash collisions are inevitable
// when has collisions occur it uses space of O(n)because I would need to loop within a a hash address to find values

let user = {
  age: 54,
  name: "Kyle",
  magic: true,
  scream: function () {
    console.log('ahhh')
  }
  
}

console.log(user.magic) // O(1) time