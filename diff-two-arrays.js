function diffArray(arr1, arr2) {
  let first = arr1.filter(i => !arr2.includes(i));
  let second = arr2.filter(i => !arr1.includes(i));
  let result = [];

  if(first.length > 0){
    for(let i=0; i<first.length; i++){
      result.push(first[i]);
    }
  }
  if(second.length > 0){
    for(let i=0; i<second.length; i++){
      result.push(second[i]);
    }
  }
  return result;
  }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])