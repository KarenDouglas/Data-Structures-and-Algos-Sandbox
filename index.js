const strings = ['a', 'b','c','d'];

// 4 items on 4 shelves of storage in RAM takes up 16bytes of storage

// push O(1)
// pop O(1)
//unshift  O(n) because, not only is the first element added to the array, but also the index # for all of the elements in the array will change. Which is a loop.

// splice  (start #, delete count, items to add)
strings.splice(2,0, 'alien')// O(n)

console.log(strings)