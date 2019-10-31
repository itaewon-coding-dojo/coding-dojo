const int2str = (number)=>{
    
    let digit = 4;
    let a =1, b=10;
    let numbers =[]
while(digit>1){
    digit = Math.floor(number/a) - Math.floor(number/b)*10 // 1234 -123
    a *= 10
    b *= 10
    numbers.push(digit)
    console.log(digit)
}
    numbers.reverse()
    const final = numbers.join('');
    console.log(final);
    return final;



}


test('int2str',() =>{

    expect(int2str(1234)).toBe('1234');
    expect(int2str(12345)).toBe('12345');
    expect(int2str(123456)).toBe('123456');
} )