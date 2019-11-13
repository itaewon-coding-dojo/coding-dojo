/*  

문제 : 주어진 문자열을 띄어쓰기 단위로 뒤집어서 나열한다.
입력값 : 'I am a boy.’
반환값 : ‘boy. a am I’

계획
    단어 구분은 입력값의 문자열 중 띄어쓰기를 기준한다.
    구분한 단어들을 배열에 저장한다.
    배열안에서 순서를 거꾸로 뒤집어준다.
    뒤집은 배열의 값들을 순서대로 출력하는데 단어하나를 출력할때마다 띄어쓰기를 붙여준다.

*/

const parsingSpace = (inputStr) => {

    const splitArray = inputStr.split(' ');
    return splitArray;
};

const reverseArr = (inputArray) => {
    
    const resultArray = inputArray.reverse();

    return resultArray;
}

const printArrToStr = (inputArray) => {

    let result = "";
    let cnt = 0;

    inputArray.forEach(i => {
        result += i;
        if ( cnt < inputArray.length-1) {        
            result += " ";
        }
        cnt++;
    });
    return result;
};

const reverseStr = (inputStr) => {

    const parseSpace = parsingSpace(inputStr);
    const reverseArray = reverseArr(parseSpace);
    const printStr = printArrToStr(reverseArray);

    return printStr;
};

test('parsingSpace', () => {
    expect(parsingSpace('I am')).toEqual(['I', 'am']);
    expect(parsingSpace('I am a boy.')).toEqual(['I', 'am', 'a', 'boy.']);
});

test('reverseArr', () => {
    expect(reverseArr(['I', 'am'])).toEqual(['am', 'I']);
    expect(reverseArr(['I', 'am', 'a', 'boy.'])).toEqual(['boy.','a','am','I']);
});

test('printArrToStr', () => {
    expect(printArrToStr(['am', 'I'])).toEqual('am I');
    expect(printArrToStr(['boy.','a','am','I'])).toEqual('boy. a am I');
});

test('reverseStr', () => {
    expect(reverseStr('I am')).toEqual('am I');
    expect(reverseStr('I am a boy.')).toEqual('boy. a am I');
});