
const solution = height => {
    const receivedTopHeight = [];

    for(let i = 0; i < height.length; i++) {
       receivedTopHeight.push(meetFirstBigHeight (leftArr(height, i), height[i]));
    }

    return receivedTopHeight;
}

const leftArr = (topHeightArr, index) => topHeightArr.filter((_, i) => i < index)

const meetFirstBigHeight = (heightArr, value)  => {

    for (let i = heightArr.length; i > 0; i--) {
        if(heightArr[i-1] > value ) {
            return i;
        }
    }
    return 0;
}

test('solution', () => {
    expect(solution([1, 5, 3, 6, 7, 6, 5])).toEqual([0, 0, 2, 0, 0, 5, 6]);
    expect(solution([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4]);
    expect(solution([3, 9, 9, 3, 5, 7, 2])).toEqual([0, 0, 0, 3, 3, 3, 6]);
    expect(solution([2, 1, 1, 1])).toEqual([0, 1, 1, 1]);
    expect(solution([1, 9, 7, 8])).toEqual([0, 0, 2, 2]);
})

test.only('leftArr', () => {
    expect(leftArr([6, 9, 5, 7, 4], 3)).toEqual([6, 9, 5]);
    expect(leftArr([6, 9, 5, 7, 4], 2)).toEqual([6, 9]);
    expect(leftArr([6, 9, 5, 7, 4], 1)).toEqual([6]);
    expect(leftArr([6, 9, 5, 7, 4], 0)).toEqual([]);
    expect(leftArr([2, 1, 1, 1], 3)).toEqual([2, 1, 1]);
    expect(leftArr([2, 1, 1, 1], 2)).toEqual([2, 1]);
    expect(leftArr([2, 1, 1, 1], 1)).toEqual([2]);
})

test('meetFirstBigHeight', () => {
    expect(meetFirstBigHeight([6, 9, 5], 7)).toBe(2);
    expect(meetFirstBigHeight([6, 9, 9], 7)).toBe(3);
    expect(meetFirstBigHeight([6], 9)).toBe(0);
    expect(meetFirstBigHeight([], 6)).toBe(0);
    expect(meetFirstBigHeight([2, 1, 1], 1)).toBe(1);
})
