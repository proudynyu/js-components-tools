function smallestCommons(arr) {
  let newArr = []
  arr = arr.sort((a, b) => a - b);

  for(let i = arr[0]; i <= arr[1]; i++) newArr.push(i);
  
  let value = true;
  let count = 1;
  while(value) {
    let resolve = newArr.filter(number => count % number === 0)
    if (resolve.length === newArr.length) break;
    count ++;
  }
  return count;
}