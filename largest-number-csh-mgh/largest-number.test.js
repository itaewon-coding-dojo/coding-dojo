const solution = (numbers) =>
  numbers.sort(compare)[0] === 0 ? '0' : numbers.join('');

const compare = (a, b) => 
  +(a + '' + b) > +(b + '' + a) ? -1 : 1


test('solution', () => {
  expect(solution([6, 10, 2])).toBe('6210');
  expect(solution([3, 30, 34, 5, 9])).toBe('9534330');
  expect(solution([0, 0, 0, 0, 0])).toBe('0');
});

test('compare', () => {
  expect(compare(9, 5)).toBe(-1);
  expect(compare(3, 30)).toBe(-1);
  expect(compare(30, 3)).toBe(1);
  expect(compare(5, 5)).toBe(1);
});