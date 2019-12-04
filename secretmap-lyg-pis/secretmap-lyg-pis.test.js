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

    // const array1 = decimalToBinary(n, arr1);
    // const array2 = decimalToBinary(n, arr2);
    
    // let newArr = [];
    
    // // newArr[0] = array1[0][0] || array[0][0];
    // // newArr[1] = array1[0][1] || array[0][1]
    // // newArr[2] = array1[0][2] || array[0][2]
    // // newArr[3] = array1[0][3] || array[0][3]
    // // newArr[4] = array1[0][4] || array[0][4]

    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n; j++) {
    //         newArr[i][j].push(array1[i][j] || array2[i][j]);
    //     }
    // }

    // console.log('newArr', newArr);

    // const block = /#/gi;
    // const blank = /' '/gi;

const convertSpecialCharacter = (str) => str.replace(/1/g, '#').replace(/0/g, ' ');

const decimalToBinary = (n, arr1) => {

    return arr1.map(element => element.toString(2).padStart(n, '0'))

};

test('secretmap', () => {
    expect(secretmap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(["#####","# # #", "### #", "#  ##", "#####"]);
    // expect(secretmap(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]        )).toEqual(["######", "### #", "## ##", " #### ", " #####", "### # "]);

})

test('decimalToBinary', () => {
    expect(decimalToBinary(5, [9, 20, 28, 18, 11])).toEqual(['01001', '10100', '11100', '10010', '01011']);
    expect(decimalToBinary(5, [30, 1, 21, 17, 28])).toEqual(['11110', '00001', '10101', '10001', '11100']);
})


