const solution = (clothes) => {
  const counts = groupBy(clothes); 
  return Object.keys(counts).reduce((total, cur) => (
    total * (counts[cur] + 1)
  ), 1) - 1;
};

const groupBy = (clothes) =>
  clothes.reduce((counts, key) => ({
      ...counts,
      [key[1]]: counts[key[1]] ? counts[key[1]] + 1 : 1
  }), {});

test('solution', () => {
  expect(solution([
    ['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']
  ])).toBe(5);
});

test('groupBy', () => {
  expect(groupBy([
    ['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']
  ])).toEqual({
    headgear: 2,
    eyewear: 1,
  });
});
