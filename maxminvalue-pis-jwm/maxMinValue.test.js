const solution = (str) => {
  const arr = str.split(' ').sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1]].join(' ');
};

test('solution', () => {
  expect(solution("1 2 3 4")).toBe("1 4");
  expect(solution("-1 -2 -3 -4")).toBe("-4 -1");
});
