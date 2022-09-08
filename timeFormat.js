const time = "1:52PM";

function convertTo24HrsTimeFormat(givenTime) {
    let checkEndsWith = givenTime.endsWith('AM');
        if(checkEndsWith)
        {
            if(givenTime.startsWith("12"))
            {
                givenTime = givenTime.replace('12','00').replace("AM","")
                }
                else{
                    let appendToStart = '0';
                    givenTime = appendToStart.concat(givenTime).replace("AM","");
                }
        }
        else{
            if(givenTime.startsWith('12')){
                givenTime = givenTime.replace('PM','')
            }
            else{
                    // for given Hourse calculation...
                    let spliteTime = givenTime.split(':');
                   
                    if(Number(spliteTime[0]) < 12) {
                        // for given Hourse calculation 
                        (spliteTime[0] = Number(spliteTime[0]) + 12)
                          // For given Minute calculation
                        spliteTime[1] = spliteTime[1].replace('PM','');

                        if(spliteTime[1] != 0 && Number(spliteTime[1]) < 10 &&spliteTime[1].length == 1){
                            spliteTime[1] = '0'.concat(spliteTime[1]); 
                        }
                      givenTime = spliteTime.join(':');
                    }  else{

                       givenTime = 'Please Enter Hourse inbetween 1 to 12'
                        
                    }  //console.error("Please Enter Hourse inbetween 1 to 12")
                  
                   
                    

            }
        }
   
    return givenTime;
}

console.log(`Converted Time is : ${convertTo24HrsTimeFormat(time)}`)
