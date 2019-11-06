
/*
문제 : 주어진 정수를 문자열로 반환한다.
입력값 : 1234(int)
반환값 : '1234'(String)
    - 입력 값을 10으로 나눈 나머지값을 하나씩 배열에 담는다.
    - 입력값을 10으로 나눈 몫을 10으로 나눈다.
    - 나머지 값을 배열에 담는다.
    - 10으로 나눴을때 몫이 0인경우 반복을 멈춘다.
    - String 변수에 반복문을 이용하여 배열에 거꾸로 담은 값들을 반대로 정렬하면서 String변수에 더해준다.
*/

const getIntToStr = (inputInt) => {
    const intToArray = intoArray(inputInt);
    const intToString = arrayToString(intToArray);

    return intToString;
};

const getExtra = (input) => {

    const extra = input % 10;

    return extra;
};

const intoArray = (inputInt) => {

    //1234 ,4
    //123 ,3
    //12 ,2
    //1 ,1
    const result = [];
    let input = inputInt;
    while (input != 0 ) {
        const extra = parseInt(input % 10);
        input = parseInt(input / 10);
        result.unshift(extra);
    }

    return result;
};



const arrayToString = (inputArray) => {
    
    let result = "";

    inputArray.forEach((v) => {
        result += v;
    });
    return result;
}

const recursionIntToStr = () => {

    return '1234';
};

test('getIntToStr', () => {
    expect(getIntToStr(1234)).toBe('1234');
    expect(getIntToStr(12345)).toBe('12345');
});

test('getExtra', () => {
    expect(getExtra(1234)).toBe(4);
    expect(getExtra(123)).toBe(3);
    expect(getExtra(12)).toBe(2);

});

test('intoArray', () => {
    expect(intoArray(1234)).toEqual([1, 2, 3, 4]);
    // expect(intoArray(123)).toEqual([1, 2, 3]);
});

test('arrayToString', () => {
    expect(arrayToString([1, 2, 3, 4])).toBe('1234');
    expect(arrayToString([1, 2, 3])).toBe('123');
});

test.only('recursionIntToStr',() => {
    expect(recursionIntToStr(1234)).toBe('1234');
    expect(recursionIntToStr(123)).toBe('123');
});