function convertHTML(str) {

  let arr = str.split('');

  for(let i=0; i<arr.length; i++){
    if(arr[i] === "&"){
      arr[i] = "&amp;";
    } else if(arr[i] === "<"){
      arr[i] = "&lt;";
    } else if(arr[i] === ">"){
      arr[i] = "&gt;";
    } else if(arr[i] === '"'){
      arr[i] = "&quot;";
    } else if (arr[i] === "'"){
      arr[i] = "&apos;"
    }
  }
  console.log(arr.join(''));
  return arr.join('');

}

convertHTML("Dolce & Gabbana");