/*
    - 인쇄목록에서 가장 앞의 인쇄물의 우선 순위를 뽑는다.
    - 나머지 인쇄목록에 방금 뺀 우선순위 보다 높은 인쇄물이 있다면 인쇄목록의 가장 뒤로 보내준다.
    - 방금뺀 우선 순위보다 높은 인쇄물이 없다면 출력한다. 출력횟수를 증가시킨다.
    - 만약 우리가 원하는 인쇄물이 나왔다면 출력횟수를 출력해준다.
*/

const getTurnsOfMyPrint = (priorities, location) => {

    const prints = priorities.map((v, i) => [i, v])

    let count = 0;

    while (true) {
        const print = prints.shift();

        if (hasGreaterPriority(prints, print)) {
            prints.push(print);
        } else {
            count++;
            if (print[0] == location) return count;
        }
    }

}

const hasGreaterPriority = (extraPrints, print) => extraPrints.length === 0
    ? false : extraPrints.filter(v => v[1] > print[1]).length == 0
        ? false : true;


test('getTurnsOfMyPrint', () => {
    expect(getTurnsOfMyPrint([1], 0)).toBe(1)
    expect(getTurnsOfMyPrint([1, 1], 1)).toBe(2)
    expect(getTurnsOfMyPrint([1, 1, 1], 2)).toBe(3)
    expect(getTurnsOfMyPrint([1, 1, 1, 2], 0)).toBe(2)
    expect(getTurnsOfMyPrint([2, 1, 3, 2], 2)).toBe(1)
    expect(getTurnsOfMyPrint([1, 1, 9, 1, 1, 1], 0)).toBe(5)
})

test('hasGreaterPriority', () => {
    expect(hasGreaterPriority([[1, 1], [2, 1], [3, 2]], [0, 1])).toBe(true);
    expect(hasGreaterPriority([[1, 1], [2, 1], [3, 1]], [0, 1])).toBe(false);
})