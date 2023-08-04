/*write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

STRINGSBINARYALGORITHMS

function stringy(size) {
  // your code here   
}

*/

//first solution
function stringy(size) {
  let binaryCode = '10'
  
    if (size === 0){
      return binaryCode = ''
    }else if (size % 2 === 0){
      return binaryCode.repeat(size / 2)
    }else if (size % 2 !== 0){
      return binaryCode.repeat((size - 1) / 2) + '1'
    }
    
  

  return binaryCode
  
}

//secondSolution
function stringy(size) {
  let str = ''
  for (i = 1; i <= size; i++){
    str += i % 2
  } 
  return str
}