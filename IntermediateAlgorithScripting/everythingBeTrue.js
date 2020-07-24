function truthCheck(collection, pre) {
  let arr = [];

  collection.forEach(obj => {
    const keys = Object.keys(obj);
    
    if (keys.includes(pre)) {
      if (typeof obj[pre] === 'string' && obj[pre] !== "" || obj[pre] === true) arr.push(obj)
    }
  });

  if (arr.length === collection.length) return true;
  return false;
}