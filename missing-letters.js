function fearNotLetter(str) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p','q','r','s','t','u','v','w','x','y','z'];
  let firstIndex = alphabet.indexOf(str[0]);
  let lastIndex = alphabet.indexOf(str[str.length-1]) + 1;

  let toCompare = alphabet.slice(firstIndex, lastIndex);

  for(let i=0; i<toCompare.length; i++){
    if(str.indexOf(toCompare[i]) == -1){
      return toCompare[i];
    }
  }
}

fearNotLetter("abce");