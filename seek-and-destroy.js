function destroyer(arr) {
  var newArr = [];

  for(let i=1; i<arguments.length; i++){
    newArr.push(arguments[i]);
  }
  let first = arr.filter(i => !newArr.includes(i));
  return first;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5)