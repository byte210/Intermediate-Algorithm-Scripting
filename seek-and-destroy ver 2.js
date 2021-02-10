function destroyer(arr) {
  let array = [...arguments[0]];
  let uniques = [];
  let ori = [];
  for(let i=1; i<arguments.length; i++){
    uniques.push(arguments[i]);
  }

  for(let i=0; i<array.length; i++){
    if(!uniques.includes(array[i])){
      ori.push(array[i]);
    }
  }
  return ori;
    
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);