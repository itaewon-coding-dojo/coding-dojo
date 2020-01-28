const getLargestNum = numbers => {
  let sortedArr = [];
  const numLen = numbers.length;

  for (let i = 0; i < numLen; i++) {
    sortedArr = [...sortedArr, compareFirstDigit(numbers)];
    numbers.splice(numbers.indexOf(compareFirstDigit(numbers)), 1)
  }

  let sum = 0;
  sortedArr.forEach(v => sum += v)

  return sum === 0 ? '0' : sortedArr.join('');
};

const compareFirstDigit = (numArr) => {
  let temp = 0;

  numArr.forEach(v => temp = getBigDigit(temp, v))

  return temp;
}

const getDigit = (num) => (num + "").length;

const getBigDigit = (num1, num2) => {
  let num1Sum = 0;
  let num2Sum = 0;
  const maxLen = getDigit(num1) > getDigit(num2) ? getDigit(num1) : getDigit(num2);
  let num1Arr = (num1 + "").split("");
  let num2Arr = (num2 + "").split("");

  const num1Arrr = [...new Array(maxLen).fill().map(v => num1Arr[num1Arr.length-1])]
      .map((v, i) => num1Arr[i] == undefined ? v : num1Arr[i]);

  const num2Arrr = [...new Array(maxLen).fill().map(v => num2Arr[num2Arr.length-1])]
      .map((v, i) => num2Arr[i] == undefined ? v : num2Arr[i]);
  
  num1Arrr.map(v => num1Sum += v)
  num2Arrr.map(v => num2Sum += v)

  return num1Sum > num2Sum ? num1 : num2;
}

test('getLargestNum', () => {
  // expect(getLargestNum([6, 10, 2])).toBe("6210");
  // expect(getLargestNum([1000])).toBe("1000");
  expect(getLargestNum([0, 0])).toBe("0");
  // expect(getLargestNum([919, 99, 91])).toBe("9991991");
  // expect(getLargestNum([3, 30, 34, 5, 9])).toBe("9534330");
})

test('compareFirstDigit', () => {
  expect(compareFirstDigit([6, 10, 2])).toBe(6);
  expect(compareFirstDigit([11, 10, 2])).toBe(2);
  expect(compareFirstDigit([1, 12, 11])).toBe(12);
  expect(compareFirstDigit([1])).toBe(1);
  expect(compareFirstDigit([3, 30])).toBe(3);
  expect(compareFirstDigit([30, 31])).toBe(31);
  expect(compareFirstDigit([39, 3])).toBe(39);
  expect(compareFirstDigit([32, 3])).toBe(3);
})

test('getDigit', () => {
  expect(getDigit(12)).toBe(2);
  expect(getDigit(123)).toBe(3);
})

test('getBigDigit', () => {
  expect(getBigDigit(34, 3)).toBe(34);
  expect(getBigDigit(32, 3)).toBe(3);
  expect(getBigDigit(323, 3)).toBe(3);
  expect(getBigDigit(323, 32)).toBe(323);
})