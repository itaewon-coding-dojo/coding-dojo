/*
    - 최대 공약수를 구하는 방법
        - 두 개의 정수중에 큰것을 작은 것으로 나눠 나누어 떨어지면, 작은수는 최대 공약수
        - 나누어 떨어지지 않으면, 2부터 greater까지 반복문을 돌린다. 돌려서 두 수 모두 나누어 지는 수가 존재한다면 
        그 수를 변수Gcd에 저장한다. 변수Gcd는 1로 초기화 해놓는다. 그리고 Gcd를 반환한다.

    - 최소 공배수를 구하는 방법
        - 두개의 정수 중에서 큰것을 작은것으로 나누었을 때 나누어 떨어지면, 큰수가 최소 공배수
        - 나누어 떨어지지 않으면, 두 수를 곱한 값에서부터 1까지 두 수로 나누었을 때 두 수 모두 나누어 진다면, 
        그 수를 변수Lcm에 저장한다. 변수Lcm은 1로 초기화 해놓는다. 그리고 Lcm을 반환한다.
*/

const getGcdLcm = (n, m) =>  n == m ? [n, n]
        : [getGcd(greater(n,m), less(n,m)), getLcm(greater(n,m), less(n,m))]

const greater = (m,n) => m - n < 0 ? n : m;
const less = (m,n) => m - n > 0 ? n : m;

const getGcd = (greater, lessThan) => {
        
        return  greater % lessThan == 0 ? lessThan : [...Array(lessThan)].map((_, i) => i+1).reverse().filter(v => greater % v ==0 && lessThan % v == 0)[0]
      
    
}

const getLcm = (greater, lessThan) => {
    if (greater % lessThan == 0) {
        return greater;
    } else {
        for(let i = greater ; i <= greater * lessThan; i++) {
            if(i % greater == 0 && i % lessThan == 0) {
                return i;
            }
        }
        return 1;
    }
}


test('getGcdLcm', () => {
    expect(getGcdLcm(3, 12)).toEqual([3, 12]);
    expect(getGcdLcm(2, 5)).toEqual([1, 10]);
    expect(getGcdLcm(64, 48)).toEqual([16, 192]);
});

test('getGcd', () => {
    expect(getGcd(12, 3)).toBe(3);
    expect(getGcd(12, 5)).toBe(1);
    expect(getGcd(120, 5)).toBe(5);
    expect(getGcd(64, 48)).toBe(16);
})

test('getLcm', () => {
    expect(getLcm(12, 3)).toBe(12);
    expect(getLcm(12, 5)).toBe(60);
    expect(getLcm(64, 48)).toBe(192);
})