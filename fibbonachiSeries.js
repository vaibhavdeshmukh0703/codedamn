let result = [0,1],addition=0;
function fibonacci(n) {
    if(n==0) return 0;
    if(n==1) {
        return result
    }
    else{
      return  calculate(n)
    }
	//return JSON.stringify(result);
}
function calculate(n){

            for(let i=0;i<n-1;i++){
             addition = result[i] + result[i+1]; 
             //console.log(addition)
            result.push(addition)
        
    } 
    return addition;
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)
