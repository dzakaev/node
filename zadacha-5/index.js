function sumOfNumbers(list) {
  let result = 0;

  for(let i = 0; i < list.length; i++) {
    result += list[i]

  }

  return result;
}
module.exports = sumOfNumbers;