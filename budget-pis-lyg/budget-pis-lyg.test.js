/*
이해한것
    - 배열 d와 정수 budget을 입력해준다.
    - 반환값은 정수이다.
    - 배열요소의 최소값을 차례대로 더한 값이 budget을 넘기지 않아야한다.
계획
    - d 배열에서 최소값 a를 구한다.
    - 최소값을 구할때마다 count+1을 해준다.
    - a를 제외한 d배열에서 최소값 b를 구한다.
    - a+b를 해준다.
    - a+b를 더해준 결과값에 다음 최소값 c를 더한다.
    - 더해준값이 budget을 넘기면 작업을 중단한다.
    - count값을 반환한다. 
*/

// const ascending = (a, b) => a - b;

// const maxDepartmentsCount = (n, maxBudget) => {
//     let sum = 0;
//     let counter = 0;
//     n.sort(ascending).forEach(i => {
//         if (sum + i <= maxBudget) {
//             counter += 1;
//             sum += i;
//         }
//     });

//     return counter;
// };
// const solution = (inputArray, budget) => {
//     let resultArray = inputArray;
//     let count = 0;
//     let sum = 0;

//     while(true){
//         const min = Math.min.apply(null, resultArray);
//         const minIndex = resultArray.indexOf(min);
//         const minArray = resultArray.splice(minIndex, 1);
//         sum += min;
//         resultArray = findMin(resultArray)
//         console.log(resultArray);
//         if ( sum >= budget) {
//             break;
//         }
//         count++;
//     }
//     return count;
// }

// const findMin = (inputArray) => {

//     const min = Math.min.apply(null, inputArray);
//     const minIndex = inputArray.indexOf(min);
//     const minArray = inputArray.splice(minIndex, 1);

//     return inputArray;
// }
const ascending = (a,b) => a-b;
const maxDepartmentsCount = (d, maxBudget) => {
    let sum = 0;
    let count = 0;
    
    d.sort(ascending).forEach(element => {
        if (sum + element <= maxBudget) {
            sum += element;
            count += 1;
        }
    });

    return count;
}

test('maxDepartmentsCount', () => {
    expect(maxDepartmentsCount([1, 3, 2, 5, 4], 9)).toBe(3);
    expect(maxDepartmentsCount([2, 2, 3, 3], 10)).toBe(4);
})

// test('findMin', () => {
//     expect(findMin([3,1,2,5,4])).toEqual([3,2,5,4]);
//     expect(findMin([3,2,5,4])).toEqual([3,5,4]);
// })
