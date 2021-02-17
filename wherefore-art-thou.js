function whatIsInAName(collection, source) {

let keys = Object.keys(source);

const result = collection.filter((obj) =>{ 
  for(let i=0; i<keys.length; i++){
    if(!obj.hasOwnProperty === keys[i] || obj[keys[i]] !== source[keys[i]]){
      return false;
      } 
    }
  return true;
});

return result;

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// for(let i=0; i<collection.length; i++){
//     for (let source in collection[i]){
//       if(collection[i].hasOwnProperty(source)){
//         arr.push(source);
//       }
//     }
// }