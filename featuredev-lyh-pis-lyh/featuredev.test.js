/*
    - progresses에 speeds를 더해준다.
    - 더한 후에, 맨 첫 요소가 100 이상인지 확인하고 혹시 맨 첫 요소가 100 되기전에 이미 된 work가 존재하는지 확인을 위해 반복문을 사용
    - 100이 된것이 있다면, progresses와 speeds를 pop 하고 , 횟수를 센다.
    - 그 이후, result에 shift를 하여 입력.
*/

const getCompletedWorksCounts = (progresses, speeds) => {
   const result = [];
   
    while(progresses.length !=0){
        var count = 0;
        speeds.forEach((v, i) => {
            progresses[i]+= v;
        });

        while(progresses[0] >= 100) {      
            progresses.shift();
            speeds.shift();
            count++;
        }

        if(count > 0) result.push(count);
    }
    console.log(result)
    return result;
}

test('getCompletedWorksCounts', () => {
    expect(getCompletedWorksCounts([93,30,55], [1,30,5])).toEqual([2,1]);
    expect(getCompletedWorksCounts([93,30], [1,30])).toEqual([2]);
});