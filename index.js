// code your solution here
function superbowlWin(arrayOfObject){
    const found = arrayOfObject.find(object=>object.result==="W")
    if(found===undefined){
        return found
    }else{
        return found.year
    }

}

