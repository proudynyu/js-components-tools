function translatePigLatin(str) {
  const regexVowel = new RegExp('[aeiou]', 'i');
  const test = regexVowel.test(str);

  if(!test) return (str.concat('ay'));
  const result = regexVowel.exec(str);
  
  if (result.index === 0) {
    str = str.split('');
    return str.concat('way').join('');
  }
  
  let arr = [];
  str = str.split('');
  for (let i = 0; i < result.index; i++) {
    arr.push(str.shift());
  }
  arr = arr.join('')
  return (str.concat(arr + 'ay').join(''))
}

translatePigLatin("rhythm");
