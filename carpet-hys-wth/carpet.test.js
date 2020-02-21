const carpetWidthHeight = (brown, red, num = 1) => {
  const area = brown + red;
  const w = (red / num) + 2;
  const h = num + 2;
  if (area === w * h) {
    return [w, h];
  }

  return carpetWidthHeight(brown, red, num + 1);
}

test('carpetWidthHeight', () => {
  expect(carpetWidthHeight(10, 2)).toEqual([4, 3]);
  expect(carpetWidthHeight(8, 1)).toEqual([3, 3]);
  expect(carpetWidthHeight(24, 24)).toEqual([8, 6]);
});

