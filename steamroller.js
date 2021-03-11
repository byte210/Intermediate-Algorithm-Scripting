function steamrollArray(arr) {
  let res = [];

  let tempF = (elem) => {
    if(!Array.isArray(elem)){
        res.push(elem)
    } else{
        for(let a in elem){
          tempF(elem[a])
      }
    }
  }
  arr.forEach(tempF);
  console.log(res)
  return res;
}

steamrollArray([1, [2], [3, [[4]]]]);