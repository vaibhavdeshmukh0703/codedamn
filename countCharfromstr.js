const str='vaibhav';

function countCharFromStr(string) {

    let firstOccurance = string.indexOf('X');
    let lastOccurance = string.lastIndexOf('X');
   

    if(firstOccurance == lastOccurance){
        return firstOccurance;
    }
    else{
        let occuranceCountIs = lastOccurance - firstOccurance;
        return occuranceCountIs;
    }
    
}

console.log(`Gap between the X is : ${countCharFromStr(str)}`)