// function compressFirstBox(boxes) {
//   console.log(boxes[0])
// }
// O(1)--- Constant Time

const boxes = [1,2,3,4,5];

function logFirstTwoBoxes(boxes){
  console.log(boxes[0]) // O(1)
  console.log(boxes[1])// O(1)
}

logFirstTwoBoxes(boxes);// O(2)

// it doesn't matter how many inputs there are when it is constant time label it is O(n)