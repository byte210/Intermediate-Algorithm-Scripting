function sumFibs(num) {
  let a = 1;
  let b = 1;
  let res = 1;

  while (b <= num){
    if(b%2 === 1){
      res += b;
    }

    let temp = b;
    b = a + b;
    a = temp;
  }

  return res;
}

sumFibs(4);