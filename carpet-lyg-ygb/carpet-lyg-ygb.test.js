// 처음에 정사각형 조건문을 건다.
// 브라운 + 레드를 루트를 씌워서 나머지가 0이면 정사각형이다. 고로 리턴은 루트 결과값을 배열에 두개를 담는다.
// 아니면 브라운 + 레드 한값을
// 브라운+레드의 약수를 구해서 

const carpet = (brown,red) =>{
    const divisor = [];
    const sum = brown + red;
    if (Math.ceil(Math.sqrt(brown + red)) === Math.sqrt(brown + red))
        return [Math.sqrt(brown + red), Math.sqrt(brown + red)]
    for (i = 0; i <= brown + red; i++) {
        if (sum % i === 0)
            divisor.push(i);
    }
    const correctSum =[];
    for(let i =0; i<divisor.length/2; i++)
    {
       if( divisor[i]*divisor[divisor.length-i-1] === sum) {

           correctSum.push(divisor[divisor.length-i-1],divisor[i])
       }
    }
    for(let i=0; i<=correctSum.length; i+=2){
       if ((correctSum[i]-2) * (correctSum[i+1]-2) === red ) {
           return[correctSum[i], correctSum[i+1]]
       }
    }
}

test('carpet' , () => {
    expect(carpet(8,1)).toEqual([3,3])
    expect(carpet(10,2)).toEqual([4,3])
    expect(carpet(24,24)).toEqual([8,6])
    expect(carpet(14,6)).toEqual([5,4])
    expect(carpet(14,4)).toEqual([6,3])
    expect(carpet(12,4)).toEqual([4,4])
    expect(carpet(12,3)).toEqual([5,3])
    expect(carpet(20,7)).toEqual([9,3])
    expect(carpet(16,9)).toEqual([5,5])
    expect(carpet(20,16)).toEqual([6,6])
    expect(carpet(18,12)).toEqual([6,5])
})