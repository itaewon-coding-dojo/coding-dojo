// - 가장 적게 신청한 팀부터 예산을 지급하면서 팀 수를 계산한다.
const getCountOfTeamSupported = (d, budget) => {
    return d.sort((a, b) => a - b).reduce((acc, cur) => {
        budget -= cur;
        return budget>=0 ? acc+1 : acc;
    },0);
}


test('getCountOfTeamSupported', () => {
    expect(getCountOfTeamSupported([1, 3, 2, 5, 4], 9)).toBe(3);
    expect(getCountOfTeamSupported([2, 2, 3, 3], 10)).toBe(4);
    expect(getCountOfTeamSupported([4, 5, 2, 3, 1], 9)).toBe(3);
})

