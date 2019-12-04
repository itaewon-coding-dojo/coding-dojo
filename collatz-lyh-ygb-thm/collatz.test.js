/*
    - 짝수인지 홀수인지 확인하여 (n % 0) 짝수 이면 2로 나누고 아니면 3을 곱하고 1을 더한다. 
        - 1이 나올때 까지 반복한다.
        - 횟수는 따로 변수로 관리한다.
        - 짝수이면, 2로 나누고
        - 홀수이면 ,3곱하고 1을 더한다.
    - n이 1이 되면 그 횟수를 보내고 아니면 그 횟수 변수가 500을 넘으면 -1 을 보낸다.
*/
const getCounts = (n) => {
    let count = 0;
    while(n != 1){
        if(count > 500) return -1;
        if(n % 2 ==0)  n = n/2;
        else n = n * 3 + 1; 
        count++;
    }
    return count; 
    // if(n === 1) return 0;
    // else if(n % 2 === 0) return 1 + getCounts(n/2);
    // else return 1 + getCounts(n*3+1);
}

test('getCounts', () => {
    expect(getCounts(6)).toBe(8);
    expect(getCounts(16)).toBe(4);
    expect(getCounts(626331)).toBe(-1);
});

//짝수 n / 2
//홀수 n * 3 + 1