
/*
문제 : 주어진 정수를 문자열로 반환한다.
입력값 : 1234(int)
반환값 : '1234'(String)
    - 입력 값을 10으로 나눈 나머지값을 하나씩 배열에 담는다.
    - 입력값을 10으로 나눈 몫을 10으로 나눈다.
    - 나머지 값을 배열에 담는다.
    - 10으로 나눴을때 몫이 0인경우 반복을 멈춘다.
    - String 변수에 반복문을 이용하여 배열에 거꾸로 담은 값들을 반대로 정렬하면서 String변수에 더해준다.

    recursion 이용한 계획
    - 입력값을 10으로 나눈 나머지 값을 구함.
    - 입력값을 10으로 나눈 몫을 구한다.
    - 위의 것을 반복한다. 끝나는 시점은 몫이 0일때


*/

const getIntToStr = (inputInt) => {

    const intToArray = insertDigitToArr(inputInt); // 1234 -> [4,3,2,1]
    const arrayToString = arrayToStr(intToArray);

    return arrayToString;
};

const restDivision = (inputInt) => {    // 1234 -> 4 , 123 -> 3
    
    const result = inputInt % 10
    return result;
}

const insertDigitToArr = (inputInt) => {    // 1234 -> [4,3,2,1]

    let array = [];
    //insertIntToArr(inputInt);   // 1234 -> [4] 123 -> [3] 
    
    while(inputInt != 0) {

        array.push( restDivision(inputInt) );  // [4] [3] [2] [1]
        inputInt = inputInt / 10;
        inputInt = Math.floor(inputInt);
    }

    return array;
}

const arrayToStr = (inputArray) => {

    reverseArray = inputArray.reverse();
    let result = "";
    reverseArray.forEach(value => {
        result += value;
    });

    return result;
}

test('getIntToStr', () => {
    expect(getIntToStr(1234)).toBe('1234');
    expect(getIntToStr(123)).toBe('123');
});

test('restDivision', () => {
    expect(restDivision(1234)).toBe(4);
    expect(restDivision(123)).toBe(3);
});

test('insertDigitToArr', () => {
    expect(insertDigitToArr(1234)).toEqual([4,3,2,1]);
    expect(insertDigitToArr(123)).toEqual([3,2,1]);
});

test('arrayToStr', () => {
    expect(arrayToStr([4,3,2,1])).toBe('1234');
    expect(arrayToStr([3,2,1])).toBe('123');
    expect(arrayToStr([2,1])).toBe('12');
    
})