function spinalCase(str) {
  var arr = str.split(/(?=[A-Z])|_|\s/).join('-').toLowerCase()
  
  return arr;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");

