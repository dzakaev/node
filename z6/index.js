function sumOfNumbers(list) {
  let result = 0;

  if (!Array.isArray(list)) {
    return undefined;
  }

  if (list.length === 0) {
    return 'пустой массив, нечего подсчитывать'
  }

  for(let i = 0; i < list.length; i++) {

     if (typeof list[i] !== "number") {
      return -1
    }

    result += list[i]
  }

  return result;
}

module.exports = sumOfNumbers;
