const decrypt = (n, map1, map2) =>
  map1
    .map((v, index) =>
      ('0'.repeat(n) + (v | map2[index]).toString(2)).slice(-n))
    .map(i => i.replace(/0/g, ' ').replace(/1/g, '#'));

test('decrypt', () => {
  expect(decrypt(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual([
    "#####", "# # #", "### #", "#  ##", "#####"
  ]);
});
