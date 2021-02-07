function sumAll(arr) {
  arr.sort((a,b) => a-b);
  let result = 0;
  let i=arr[0];
  do{
    result += i;
    i++;
  }while(i<arr[1]+1);
  return result;
}

sumAll([1, 4]);