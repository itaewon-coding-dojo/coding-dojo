/*
 계획
    - 단어의 길이를 알아낸다.
    - 길이가 홀수인지 짝수인지 구분한다.
    - 짝수면 가운데 두 글자를 반환한다.
    - 홀수면 가운데 한 글자를 반환한다.

입력값 : "abcde"
반환값 : "c"

입력값 : "qwer"
반환값 : "we"
*/

const centernumber = (word) => {
    const wordL = wordLength(word);
    if(isEven(wordL)){
        return getCenterTwoWordsOfStr(word);
    }else{
        return getCenterWordOfStr(word);
    }

};

const wordLength = (word) => {

    return word.length;
}

const isEven = (number) => {
    
    if(number%2 == 0) {
        return true;    
    }
    return false;
}

const getCenterWordOfStr = (word) => {
    const wordL =  wordLength(word); //a,b,c,d,e // a,b,c,d,e,f,g 길이/2 = 중간index
    
    return word.charAt(wordL/2);
}

const getCenterTwoWordsOfStr = (word) => {

    const wordL = wordLength(word); // q,w,e,r (1,2) // q,w,e,r,t,y (2,3) 길이/2-1  , 길이/2
    
    return word.charAt(wordL/2-1) + word.charAt(wordL/2);
}

test('centernumber', () => {
    expect(centernumber("abcde")).toBe("c");
    expect(centernumber("qwer")).toBe("we");
});

test('wordLength',() => {
    expect(wordLength('abcde')).toBe(5);
    expect(wordLength('qwer')).toBe(4);
});

test('isEven', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(1)).toBe(false);
})

test('getCenterWordOfStr', () =>{
    expect(getCenterWordOfStr("abcde")).toBe('c');
    expect(getCenterWordOfStr("abcdefg")).toBe('d');
})

test('getCenterTwoWordsOfStr', () => {
    expect(getCenterTwoWordsOfStr("qwer")).toBe('we');
    expect(getCenterTwoWordsOfStr("qweras")).toBe('er');
});