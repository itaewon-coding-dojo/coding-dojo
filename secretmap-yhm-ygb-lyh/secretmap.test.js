/*
    - arr1과 arr2에 들어있는 정수 elements들을 이용하여, 맵 배열로 만든다.
        - arr에 있는 각 요소들을 이진수로 바꾼 후 배열에 저장한다.
    - arr1과 arr2를 합쳐서 진짜 지도를 만든다.
    - 1을 #으로, 0은 " "(공백으로) 만든 후에 값을 출력한다.
*/

const getDecryptedMap = (n, arr1, arr2) => {
    const realMap =  combineMaps(decryptIntArrayToBinaryArray(arr1), decryptIntArrayToBinaryArray(arr2));
    return convertBinaryToSymbol(realMap).map((v) =>  v.join(''));
}
const decryptIntArrayToBinaryArray = (array) => { 
   return array.map((v, i) => {
        return v.toString(2).padStart(array.length,'0').split('').map((v) => parseInt(v));
    });
}

const combineMaps = (arr1, arr2) => arr1.map((v1, i1) => 
                        v1.map((_, i2) => arr1[i1][i2] ==1 || arr2[i1][i2] ==1 ? 1 : 0 ));
    

const convertBinaryToSymbol = (combinedMap) =>
    combinedMap.map((v1, i1) =>  v1.map((_, i2) => combinedMap[i1][i2] == 1 ? "#" : " "));
    

test('getDecryptedMap', () => {
    expect(getDecryptedMap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).
                                toEqual(["#####","# # #", "### #", "#  ##", "#####"]);
});

test('decryptIntArrayToBinaryArray', () => {
    expect(decryptIntArrayToBinaryArray([9, 20, 28, 18, 11])).toEqual([[0,1,0,0,1],[1,0,1,0,0],
                                                                    [1,1,1,0,0],[1,0,0,1,0],[0,1,0,1,1]]);
    expect(decryptIntArrayToBinaryArray([30, 1, 21, 17, 28])).toEqual([[1,1,1,1,0],[0,0,0,0,1],
                                                                    [1,0,1,0,1],[1,0,0,0,1],[1,1,1,0,0]]);
})

test('combineMaps', () =>{
    expect(combineMaps([[0,1,0,0,1],[1,0,1,0,0],[1,1,1,0,0],[1,0,0,1,0],[0,1,0,1,1]],
                            [[1,1,1,1,0],[0,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,0,0]]))
                            .toEqual([[1,1,1,1,1],[1,0,1,0,1],[1,1,1,0,1],[1,0,0,1,1],[1,1,1,1,1]]);
})

test('convertBinaryToSymbol', () => {
    expect(convertBinaryToSymbol([[1,1,1,1,1],[1,0,1,0,1],[1,1,1,0,1],[1,0,0,1,1],[1,1,1,1,1]]))
                                .toEqual([["#","#","#","#","#"],
                                          ["#"," ","#"," ","#"], 
                                          ["#","#","#"," ","#"], 
                                          ["#"," "," ","#","#"], 
                                          ["#","#","#","#","#"]]);
})