function pairElement(str) {
  let arr = [];
  for(let i=0; i<str.length; i++){
    if(str.charAt(i) == "G"){
      arr.push(["G", "C"]);
    } else if(str.charAt(i) == "C"){
      arr.push(["C", "G"])
    } else if(str.charAt(i) == "A"){
      arr.push(["A", "T"]);
    } else {
      arr.push(["T", "A"]);
    }
  }
  return arr; 
}

pairElement("GCG");