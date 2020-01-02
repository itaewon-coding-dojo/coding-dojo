/*
현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.
입출력 예
priorities	    location	return
[2, 1, 3, 2]	   2	      1
[1, 1, 9, 1, 1, 1] 0	      5
[a, b, c, d, e, f]  
[b, c, d, e, f, a]
[c, d, e, f, a, b] 

계획
- 배열에서 첫번째 값보다 중요도가 높은 값이 있는지 찾아본다.
- 찾으면 첫번째 값을 뽑아서 맨뒤로 보낸다.
- 만약 맨 앞의 값의 중요도가 가장 크다면 출력해준다.
- 출력을 할 때 마다 count를 1씩 올려준다.
- location값이 출력되면 count값을 반환해준다.
*/


const getLocationPrintOrder = (str, location) => {

    let count = 1;
    let strLen = str.length;
    let nowStrLen;

    while (true) {
        nowStrLen = isThereImportFactor(str).length
        if (strLen != nowStrLen && location === 0) {
            break;
        }
        else if (strLen != nowStrLen && location !== 0) {
            strLen -= 1;
            count += 1
        }
        location -= 1;
        if(location === -1) {
            location = nowStrLen-1;
        }
    }

    return count;
    // 이전보다 length가 줄어들때 마다 count+1
    // index 0 ,  length도 줄어들면 count 반환
}

const isThereImportFactor = (str) => {
    const firstIndex = str[0];
    let isImport = false;
    str.shift();
    str.map(v => {
        if (firstIndex < v) {
            return isImport = true;
        }
    });
    
    if(isImport === true) {
        str.push(firstIndex);
    }
    return str;
}

test.only('getLocationPrintOrder', () => {
    expect((getLocationPrintOrder([2,1,3,2], 2))).toBe(1);
    expect((getLocationPrintOrder([1,1,9,1,1,1], 0))).toBe(5);
})

test('isThereImportFactor', () => {
    expect((isThereImportFactor([2,1,3,2]))).toEqual([1,3,2,2]);
    expect((isThereImportFactor([1, 1, 9, 1, 1, 1]))).toEqual([1, 9, 1, 1, 1, 1]);
    expect((isThereImportFactor([9, 1, 1, 1, 1, 1]))).toEqual([1, 1, 1, 1, 1]);
})
