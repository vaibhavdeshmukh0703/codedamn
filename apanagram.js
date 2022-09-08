// const abcd = [
//   'a', 'b', 'c', 'd', 'e', 'f',
//   'g', 'h', 'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p', 'q', 'r',
//   's', 't', 'u', 'v', 'w', 'x',
//   'y', 'z'
// ]
// const apanagram =(sentence)=>{
//     let letterArray = [];
//     let splitSentence = sentence.toLowerCase().split('');
//     let filterArray = splitSentence.filter((letter,index)=>{
        
//          return letter != " " && letter != "."
//     })

//    // console.log(filterArray.sort());
//     for(i=0;i<filterArray.length;i++){
//         if(!letterArray.includes(filterArray[i])){
//             letterArray.push(filterArray[i])
//         }
//     }

   
//     return JSON.stringify(abcd) === JSON.stringify(letterArray.sort())
   
// }
// let sentence = 'The quick brown fox jumps over the lazy dog.'
// console.log('Given Sentence is Panagram',apanagram(sentence));

let sentence = 'acb';
function isPanagram(sentence) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let regex = '/\s/g';
    let sentenceLowercase  = sentence.toLowerCase().replace(regex,"");

    for(i=0;i<alphabets.length;i++){
console.log(sentenceLowercase.indexOf(alphabets[i]))
        if(sentenceLowercase.indexOf(alphabets[i])===-1){
            return 'Is not panagram';
        }
    }
    return 'Is a Panagram';
}
console.log(isPanagram(sentence));