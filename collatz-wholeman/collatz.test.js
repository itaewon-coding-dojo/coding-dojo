const collatzGuessCount = (num, acc) => 
  (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);

test('collatzGuessCount', () => {
  expect(collatzGuessCount(6, 0)).toBe(8);
  expect(collatzGuessCount(16, 0)).toBe(4);
  expect(collatzGuessCount(626331, 0)).toBe(-1);
});

test('processCollatz', () => {
  expect(processCollatz(6)).toBe(3);
  expect(processCollatz(3)).toBe(10);
});