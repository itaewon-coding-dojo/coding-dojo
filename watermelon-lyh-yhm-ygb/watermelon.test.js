/*
- '수박수박' 의 패턴을 n길이 만큼 출력한다.
        - n만큼 반복문을 사용하여 순회한다.
        - 문자열 변수에 '수'와 '박'을 번갈아 가면서 뒤에 붙혀준다.
            - 홀수면 박를 쓰고 짝수면 수를 쓴다.
            - 순회하는 변수 값을 2로 나눈 나머지가 0이면, 수를, 1이면 박을 출력한다.
*/
const watermelon = (length) => {
   return Array.from({ length }, ()=> 1).map((_, index) => index % 2 ===0 ? "수" : "박").join("");
}



test('watermelon', () => {
    expect(watermelon(3)).toBe("수박수");
    expect(watermelon(4)).toBe("수박수박");
})