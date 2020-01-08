/*
아는것
- 오른쪽에서 왼쪽으로 송신된다
- 자신의 수보다 높은 수를 가진 탑만이 송신을 받을수있다.
- 한번 송신이 되면 끝난다.
- 송신을 못하면 0을 리턴한다.
- 자신의 송신을 받은 탑의 index+1을 리턴한다.

계획
2. 인덱스 뒤부터 -1씩 증가하면서 자신의 수보다 큰수가 있으면 그 수의 인덱스+1을 리턴한다.
3. 자신보다 큰수가 없으면 0을리턴해요
4. 결과값을 리버스해요
*/

function solution(heights) {
    
    const value = [];
    
    for(let i = heights.length-1; i>=0; i--) {
        
       const array = heights.filter(el => el > heights[i])
        heights.pop();
        console.log(array);
        console.log(value.push(heights.lastIndexOf(array[array.length-1])+1));
        console.log(value);
        
        // break;
        
    }
    return value.reverse();
}

test('solution', () => {
    expect(solution([3,9,9,3,5,7,2])).toEqual([0,0,0,3,3,3,6]);
});
