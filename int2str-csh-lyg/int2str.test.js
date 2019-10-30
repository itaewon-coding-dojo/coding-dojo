

const int2str = (number) => {
    /*const lastDigit = number - Math.floor(number / 10) * 10
    const thirdDigit = Math.floor(number/10) - Math.floor(number / 100) * 10 ;
    const secondDigit = Math.floor(number/100) - Math.floor(number / 1000) * 10; 
    const firstDigit = Math.floor(number/1000);*/
    const digit  = number - Math.floor(number /10) * 10 //4
    
    const numbers = [];
    while(number == ){



    }
    console.log(numbers);
    return numbers.join('');
};

test('int2str', () => {
    expect(int2str(1234)).toBe('1234');
    expect(int2str(12345)).toBe('12345');
    expect(int2str(123456)).toBe('123456');
});