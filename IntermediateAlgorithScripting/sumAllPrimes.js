function sumPrimes(num) {
  let arr = [];
  
  for (let i = 0; i <= num; i++) {
    let temp = [];

    for (let j = 0; j <= i; j++) {
      if (i % j === 0 && j !== 0) {
        temp.push(i)
      }
    }
    
    if (temp.length === 2) {
      temp.forEach(array => {
        if (arr.indexOf(array) === -1) {
          arr.push(array)
        }
      });
    }
  }

  arr = arr.reduce((a, b) => a + b);
  return num;
}