/*
 - seoul의 배열에서 김서방이라는 원소값이 들어가있는 index값을 구한다
    - 배열에서 'kim'이란 값을 갖는 index를 반환 한다.
*/
const findMrKim = (names) => {
  
    return "김서방은 " +  names.indexOf("Kim") + "에 있다";
    
}

test('findMrKim', () => {
    expect(findMrKim(["Jane", "Kim"])).toBe('김서방은 1에 있다');
});