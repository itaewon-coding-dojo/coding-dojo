const findTowerIndex = heights => {
  let heightIndexPairs = [];
  for (let i = 1; i <= heights.length; i++) {
    heightIndexPairs.push([heights[i - 1], i]);
  }

  let reversdArray = heightIndexPairs.reverse();

  let indexes = [];
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      
      if (reversdArray[i][0] < reversdArray[j][0]) {
        indexes.push(reversdArray[j][1]);
        break;
      }
      if (j == heights.length - 1) {
        indexes.push(0);
        break;
      }
    }
  }

  indexes.push(0);

  return indexes.reverse();
};

// 4,2,2,0,0 -> 4,7,5,9,6
// 6,3,3,3,0,0,0 -> 2,7,5,3,9,9

test(`top test`, () => {
  expect(findTowerIndex([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4]);
  expect(findTowerIndex([6, 9, 5, 7, 8])).toEqual([0, 0, 2, 2, 2]);
  expect(findTowerIndex([6, 9, 5, 7, 9])).toEqual([0, 0, 2, 2, 0]);
  expect(findTowerIndex([20, 9, 5, 7, 9])).toEqual([0, 1, 2, 2, 1]);
  expect(findTowerIndex([3, 9, 9, 3, 5, 7, 2])).toEqual([0, 0, 0, 3, 3, 3, 6]);
  expect(findTowerIndex([1, 5, 3, 6, 7, 6, 5])).toEqual([0, 0, 2, 0, 0, 5, 6]);
});
