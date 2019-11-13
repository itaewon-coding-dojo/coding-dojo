/*
- 문자열 안에 있는 모든 글자가 숫자인지 확인 해야함
        - 문자열을 배열로 변환
        - 배열에서 하나하나 숫자인지 확인한다.
        - 숫자 아니면 false 반환
        - 숫자면 TRUE 반환.

입출력 
s	    return
a234	false
1234	true
['a', '2', '3' ,'4']

*/

const DECIMAL = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const stringbasic = (strValue) => {
   const wordsInArray = Array.from(strValue);
   for(let i = 0; i< wordsInArray.length; i++) {
        if(isInteger(wordsInArray[i])==false) {
            return false;
        }
   }
    return true;
}

const isInteger = (inputWord) => {
    if(DECIMAL.filter(word => word === inputWord).length==1) return true;
    else return false;
    
}

test('stringbasic', () => {
    expect(stringbasic('a234')).toBe(false);
    expect(stringbasic('1234')).toBe(true);
})

test('isInteger', () => {
    expect(isInteger('1')).toBe(true);
    expect(isInteger('a')).toBe(false);
})