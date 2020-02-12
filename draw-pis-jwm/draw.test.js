const solution = (N, A, B) => {
  let count = 1;

  while (true) {
    A = Math.ceil(A / 2)
    B = Math.ceil(B / 2)

    if (A === B) {
      return count
    }
    count += 1;
  }
};

test('solution', () => {
  expect(solution(8, 4, 7)).toBe(3);
});