const draw = (n, a, b) => {
    let count = 0;

    while (Math.abs(a - b) != 0) {
        a = ifOddAddOne(a) / 2;
        b = ifOddAddOne(b) / 2;
        count++;
    }
    return count;
}

const ifOddAddOne = (A) => {
    return A % 2 === 0 ? A : A + 1;
}

test('draw', () => {
    expect(draw(8, 4, 7)).toBe(3);
    expect(draw(8, 1, 2)).toBe(1);
})