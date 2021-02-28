function smallestCommons(arr) {
  let numbers = arr.sort(function(a,b){
    return a-b;
  }),
  scm = 0,
  multiple = numbers[1];
  //we are looking for x which can be evenly divided by all numbers from given ragne;
  //take number and test it using %allNumbers[argument] === 0 until you'll find SCM.

  while(scm === 0){
    for(let i=numbers[0]; i<=numbers[1]; i++){
      if(multiple%i !== 0){
        break;
      }

      if(i == numbers[1]){
        scm = multiple;
      }
    }
    multiple += numbers[1];
  }

  return scm;
}


smallestCommons([1,5]);
smallestCommons([5, 1])
smallestCommons([2, 10])
smallestCommons([23, 18])