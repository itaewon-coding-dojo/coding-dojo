const numberOfCombinations = (clothes) => {
    const combination = clothes.reduce((acc, [cloth, key]) => ({
        ...acc,
        [key]: [...(acc[key] || []), cloth],
    }), {});

    let sum = 1;
    for (let key in combination) {
        sum *= combination[key].length + 1
    }

    return sum - 1
}

test('서로 다른 옷의 조합의 수', () => {
    expect(numberOfCombinations([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
        .toBe(5);
    expect(numberOfCombinations([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))
        .toBe(3);

});

