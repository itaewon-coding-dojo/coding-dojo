const solution = (clothes) => 
  Object.values(groupBy(clothes))
    .reduce((total, cur) => total * (cur + 1), 1) - 1;

const groupBy = (clothes) =>
  clothes.reduce((counts, [_, key]) => ({
      ...counts,
      [key]: counts[key] ? counts[key] + 1 : 1
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
