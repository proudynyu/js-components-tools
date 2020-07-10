function uniteUnique(arr) {
  const args = Object.values(arguments);
  let newArr = new Set();

  const myArr = args
    .filter(array => array.map(
      number => newArr.add(number)
      )
    )

  return Array.from(newArr);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
