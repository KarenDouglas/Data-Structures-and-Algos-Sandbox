// Given 2 arrays, create a func that let's user know whether these two arrays contain any common items:

const array1= ['a','b','c','x'];
const array2= ['z','y','i'];
const array3= ['a','b','c', 'x'];
const array4= ['z','y','x'];

function hasMatchingItem(arr1, arr2){

  for(let i = 0; i< arr1.length; i++){
    for (let j =0; j< arr2.length; j++){
      if(arr1[i]===arr2[j]){
        return true;
      }
    }
  }
  return false
}


console.log('with for loops: '+
  hasMatchingItem(array4,array1)
)


// usually  for loops can be turned into hash tables
// 1. First I will true my array into an object
// array1 => obj {
// a:true,
// b:true,
// c:true,
// x:true,
// }

// 2. Then I will check if the second array is equal to the objects properties

// array2[index] ===obj.properties

function containsCommonItem(arr1,arr2){
  // loop thru first array and create object where props  === items in the array
  // loop thru secon array and check if item in 2nd array exists on created object

  let map = {};

 for( let i = 0; i< arr1.length; i++){
   if (!map[[arr1[i]]]){
     const item= arr1[i];
     map[item] = true;
   }
 }
 for (let j = 0 ; j< arr2.length; j++){
   if(map[arr2[j]]){
     return true;
   }
 }
  return false
}
console.log(
containsCommonItem(array3, array4)
  
)