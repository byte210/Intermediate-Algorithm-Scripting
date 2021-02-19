function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const splittedStr = str.split('');
  let firstVowel = '';
  for(var i=0; i<splittedStr.length; i++){
    if(vowels.includes(splittedStr[i])){
      firstVowel = i;
      break;
    }
  }

  let firstLetters = splittedStr.slice(0, firstVowel);
  if (firstLetters.length > 1) firstLetters = firstLetters.join('');

  if(!vowels.includes(splittedStr[0])){
    splittedStr.splice(0, firstVowel);
    splittedStr.push(firstLetters + 'ay');
  } else {
    splittedStr.push('way');
  }
  return splittedStr.join('');
  
  }

translatePigLatin("consonant");
translatePigLatin("schwartz");