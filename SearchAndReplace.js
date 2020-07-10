function myReplace(str, before, after) {
  const regex = new RegExp(before, 'gi');
  const regexUppercase = new RegExp('^[A-Z]');

  const capitalize = regex.exec(str);
  
  if (regexUppercase.test(capitalize)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  return str.replace(regex, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
