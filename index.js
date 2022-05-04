const nemo = [ 'dory', 'charles', 'brody', 'twitch','nemo'];
const large = new Array(10000).fill('nemo')

function findNemo(array) {
  for(let i = 0 ; i < array.length; i++){

    if(array[i] === 'nemo'){
      console.log('found NEMO')
    }
  }

}

findNemo(large);
// how does this function grow as the input increases? :   for every element in the array, there is an operation
// O(n) ---It takes linear time to find nemo... so the Big O depends on the number of inputs. This is the most common type of complexity
// n = size of the input 
