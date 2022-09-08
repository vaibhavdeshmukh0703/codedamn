const num=1234;
let newNumber=[];
function ReverseNumber(num){
   //step 1 :Convert number into string format
   num = num.toString();
   // Iterate that string in reverse order and store into an array
   for (let index = num.length-1; index>=0 ; index--){
         newNumber.push(num[index])
   }  
    // make string of that array using join method and convert that string into a NUMBER
 return Number(newNumber.join(''));
}   
console.log("Reverse number is :",ReverseNumber(num)); 