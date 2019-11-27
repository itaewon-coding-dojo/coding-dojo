const getPatternString = (n) => 
  Array.from({ length: n }, (_, i) => 
    (i % 2 === 0) ? '수' : '박').join('');

test('getPatternString', () => {
  expect(getPatternString(3)).toBe('수박수');
  expect(getPatternString(4)).toBe('수박수박');
});