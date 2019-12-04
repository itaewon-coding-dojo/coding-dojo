/*
1. 입력값 n, arr1, arr2을 입력함.
2. arr1, arr2의 요소들을 2진수로 바꾼다.
3. 일단 arr1 과 arr2의 의 각요소를 or로 비교한 결과값을 새로운 배열에 저장한다.
4. 2진수의 자리값이 1이면 # 나머지는 공백으로 바꿔준다.
5. 새로운 배열을 출력한다.
*/

const secretmap = (n, arr1, arr2) => arr1
    .map((v, i) => (v | arr2[i]).toString(2).padStart(n, '0'))
    .map(convertSpecialCharacter);

const convertSpecialCharacter = (str) => str.replace(/1/g, '#').replace(/0/g, ' ');

test('secretmap', () => {
    expect(secretmap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(["#####", "# # #", "### #", "#  ##", "#####"]);

});
