const joystick = (name) => {
    let count = 0;
    const nameArr = name.split('').map(i=>i.charCodeAt());
    if(nameArr.filter(x=> x !== 65).length ===0){
        return 0;
    }
    count += Math.min(nameArr[0]-65, 91-nameArr[0]);
    nameArr.shift();
    if(nameArr.filter(x=> x !== 65).length ===0){
        return count;
    }
    const getMinCountRight = getMinCount(nameArr)
    nameArr.reverse();
    const getMinCountLeft = getMinCount(nameArr)
    nameArr.reverse();
    if(getMinCountRight<= getMinCountLeft) {
        for(let i=0; i<nameArr.length-getMinCountLeft; i++){
            count += Math.min(nameArr[i]-65, 91-nameArr[i])+1;
        }
    }
    else{
        nameArr.reverse();
        for(let i=0; i<nameArr.length-getMinCountRight; i++){            
            count += Math.min(nameArr[i]-65, 91-nameArr[i])+1;
        }
    }
    return count;
}

const getMinCount = (nameArr) => {
    let whileCount = 0;
    while(nameArr[whileCount] === 65)
    {
        whileCount+= 1
    }
    return whileCount;
}


test('joystick', ()=> {
    expect(joystick('JEROEN')).toBe(56);
})