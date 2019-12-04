/*
1. 이해
- 문자열이 홀수이면 '수'로 문장이 끝나고 문자열이 짝수면 '박'으로 문장이 끝난다.
- 정수만 입력받아야 한다.
- 문자열의 첫 index는 '수'가 들어가야 한다.
- index가 홀수면 '수' 짝수면 '박'

2. 계획
- 정수를 입력받는다.
- 입력받은 정수의 길이를 가진 배열을 생성한다.
- 입력받기전의 배열의길이가 0 또는 짝수면 '수' 홀수면 '박'을 map함수를 이용해서 
  번갈아가며 push 한다.
- push가 끝나면 배열을 출력한다. 

*/
// function printWatermelon(inputInt) {
//     let watermelonArray = [];

//     let cnt = 0;
//     while (cnt < inputInt) {
//         if (cnt == 0 || cnt % 2 == 0) {
//             watermelonArray.push('수');
//         } else {
//             watermelonArray.push('박');
//         }
//         cnt++;
//     }

//     return watermelonArray.join('');
// }

// function printWatermelon(inputInt) {
//     let wmArray = [];

//     let cnt = 0;
//     while (cnt < inputInt) {
//         (cnt == 0 || cnt % 2 == 0) ? wmArray.push('수') : wmArray.push('박');
//         cnt++;
//     }

//     return wmArray .join('');
// }


function printWatermelon(inputInt) {

    return Array.from({length: inputInt}, (v, i) => i % 2 == 0 ? '수' : '박').join('');

}

test('printWatermelon', () => {
    expect(printWatermelon(3)).toEqual('수박수');
    expect(printWatermelon(4)).toEqual('수박수박');
    expect(printWatermelon(5)).toEqual('수박수박수');
    expect(printWatermelon(6)).toEqual('수박수박수박');
})
