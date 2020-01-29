const solution = (arr) =>  Object.values(groupBy(arr)).reduce((acc, cur) => acc * (cur + 1),1) - 1;


const groupBy = (arr) => {
    arr.reduce((acc,v) => ({
        ...acc,
        [v[1]]: acc[v[1]] ? acc[v[1]] + 1 : 1,
    }), {});
}
/*
1. object를 생성.
2. arr 순회하며 의류의 종류를 뽑아 object에 key로 존재하는지 확인
    - 존재하지 않음 : 
    - 존재 : 
*/



test('solution', () => {
    expect(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])).toBe(5);
});