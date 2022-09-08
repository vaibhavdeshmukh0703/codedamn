const input = ['hey','junk','hay','hay','morejunk','needle','randomJunk'];

function findNeedle(array){
  
//    for (let index = 0; index < array.length; index++) {
//        if(array[index] == 'needle'){   
//            return index;
//        }      
//    }
//   return 'needle not present'
let index  = array.indexOf('needle');
return index;

}
console.log(`found the needle at position ${findNeedle(input)}`);