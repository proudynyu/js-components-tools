function pairElement(str) {
  str = str.split('');

  str = str.map(letter => {
    switch(letter) {
      case 'G':
        return ['G', 'C'];
      case 'C':
        return ['C', 'G'];
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
    }
  })

  return str;
}

pairElement("GCG");
