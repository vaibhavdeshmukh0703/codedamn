function genrateRandomNumber(startNumber,endNumber) {
    let randomNumber;
    randomNumber = (startNumber + endNumber)/2
    return randomNumber;    
}

console.log(`Random Number is:  ${genrateRandomNumber(1,50)}`);