function convertHTML(str) {
  const dict = {
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&apos;',
    '<': '&lt;',
    '>': '&gt;'
  }

  for (let letter of str) {
    if (letter in dict) {
      str = str.replace(letter, dict[letter])
    }
  }
  
  return str;
}

convertHTML("Dolce & Gabbana");
