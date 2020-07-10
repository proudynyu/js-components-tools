function fearNotLetter(str) {
  str = str.split('');  
  str = str.map(letter => letter.charCodeAt(0))
  
  for (let i = str[0]; i < str.length + str[0]; i++) {
    if (str.indexOf(i) === -1) {
      return String.fromCharCode(i);
    }
  }
  return undefined;
}

fearNotLetter("abce");
