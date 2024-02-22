
let currDay=Date().split(" ");
let time=currDay[4].split(":");
switch(currDay[0]){
    case "Thu": currDay="Thursday"
                break
    case "Tue": currDay="Tuesday"
                break
    case "Wed": currDay="Wednesday"
                break
    case "Mon": currDay="Monday"
                break
    case "Fri": currDay="Friday"
                break
    case "Sat": currDay="Saturday"
                break
    default:    currDay="Sunday"
                          
}

let firstEle=parseInt(time[0]);
if(firstEle-12>0){
    firstEle=firstEle-12+' PM';
}else{
    if(firstEle==0){
        firstEle=12
    }
    firstEle=firstEle+' AM';
}


console.log("Today is : ",currDay);
console.log("Current time is : ",firstEle,' : ',time[1],' : ',time[2])

