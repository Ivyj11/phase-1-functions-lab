// Code your solution in this file!
let someValue;

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if(someValue<42){
        return 42-someValue;
    }else{
    return someValue-42
    }
    
  }

  distanceFromHqInBlocks(56)


  function  distanceFromHqInFeet(someValue){
   var d = distanceFromHqInBlocks(someValue);
   return d*264

  }

  distanceFromHqInBlocks(30);

  function  distanceTravelledInFeet(start, end){
    //return distanceFromHqInBlocks(start-end)
    let d ;
    if(start>end){
       d =  start-end
    }else{
        d = end-start
    }
 return d*264
    
  }

  distanceTravelledInFeet(34,38)


  function calculatesFarePrice(start,end){
    let d
    d = distanceTravelledInFeet(start,end)
    if(d<400){
        return 0
    }else if(d>400 && d<2000){
        return ((d-400)*2)/100
    }else if(d>2000 && d<2500){
        return 25
    }else if(d>2500){
        return "cannot travel that far"
    }

  }

