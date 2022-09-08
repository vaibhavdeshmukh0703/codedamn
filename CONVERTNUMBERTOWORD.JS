const number = 5635;
const oneTonine = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Foure",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

const TensToNintien = [
  "Ten",
  "Eleven",
  "Twelve",
  "Therteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Ninieteen",
];
const TwentyToNinty = [
  "",
  "",
  "Twenty",
  "Therty",
  "Fourty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

function convertNumberToWord(number) {
  const Thousand = ["Hundred", "Thousand", "lack", "Million", "Billion"];

  let numberLength = number.toString().length;
  switch (numberLength) {
    case 1: // for 1 - 9 word break;
      return OneToNIne(number);

      break;
    case 2: // for  10 Ten to  NInty nine 99;
      return TenToNintynine(number);
      break;
    case 3: // for 1 hundred to nine hundred ninty nine 999
      return HundredToNinenintyNine(number);
      break;
    case 4: // for thousand 9999
      return ThousandToNineThousandNineHundredNintyNine(number);
      break;
    case 5: // for lack  10,000 - 99,999
      return TenThousandToNinetynineThousandNineHundredNintynine(number);
      console.log("inside 5th case");
      break;
    case 6: // for 1 Million 1,00,000 to 9,99,999
    return OneLackToNinetynineLack(number);
      break;
    case 7: // for 1 Billion 10,00,000 to 99,99,999
      break;
    case 8: // for 1 Million 1,00,00,000 to 9,99,999,999
      break;
    case 9: // for 10 Billion
      break;
    default:
      break;
  }
  return number;
}
function OneToNIne(number) {
 
  return oneTonine[number];
}

function TenToNintynine(number) {
  if (number >= 10 && number <= 19) {
    let reminder = number % 10;
    return TensToNintien[reminder];
  } else {
    let reminder = number / 10; // number(2.1) = 21/10
    let reminderArray = reminder.toString().split("."); //['2','1']
   // console.log(reminder, reminderArray);

    if (reminderArray.length == 1) {
      let word = TwentyToNinty[Number(reminderArray[0])];
      return word;
    } else {
      let word =
        TwentyToNinty[Number(reminderArray[0])] +
        " " +
        oneTonine[Number(reminderArray[1])];
      //console.log(oneTonine[Number(reminderArray[1])]);
      return word;
    }
  }
  return;
}

function HundredToNinenintyNine(number) {
  // for 100 to 999
  let reminder = number / 100;
 // console.log(reminder);
  let word;
  if (reminder == 1) {
    word = `${OneToNIne(reminder)} Hundred`;
    return word;
  } else {
    let reminderArray = reminder.toString().split(".");
    //console.log(reminder, reminderArray);
    if (reminderArray[0] >= 1) {
      word = `${OneToNIne(reminderArray[0])} Hundred ${TenToNintynine(
        reminderArray[1]
      )}`;
      return word;
    } else {
      word = `${TenToNintynine(reminderArray[1])}`;
      return word;
    }
  }
}
function ThousandToNineThousandNineHundredNintyNine(number) {
  let reminder = number / 1000;
    let word;
  //console.log('from 1000 to 9999',reminder);
 
  if (reminder == 1) {
    word = `${OneToNIne(reminder)} Thousand`;
    return word;
  } else {
    let reminderArray = reminder.toString().split(".");
    if(reminderArray[0]==0){
      return HundredToNinenintyNine(reminderArray[1])
    }
    else{
      word = `${OneToNIne(reminderArray[0])} Thousand ${HundredToNinenintyNine(
        reminderArray[1]
      )}`;
      return word;
    }
    
  }
}
function TenThousandToNinetynineThousandNineHundredNintynine(number) {
  // for 10,000 to 99,999
  // 00001/1000=0.001
  let word;
  let reminder = number / 1000; 
  if(reminder == 10){
    word = `Ten Thousand` 
    return word;
  }
  let reminderArray = reminder.toString().split(".");
  //console.log('from 10000-99999',reminderArray);
  if (reminderArray[0]== 0){
    return ThousandToNineThousandNineHundredNintyNine(reminderArray[1]);
  }
  else{
    word = `${TenToNintynine(
    reminderArray[0]
  )} Thousand ${HundredToNinenintyNine(reminderArray[1])}`;
  return word;

  }
  
   
}

function OneLackToNinetynineLack(number){
  // for 1,00,000 to  99,99,999
 let reminder = number / 100000;
  if (reminder == 1) {
    word = `${OneToNIne(reminder)} lack`;
    return word;
  }
  else{
    let reminderArray = reminder.toString().split('.');
   // console.log('from 100001-999999',reminderArray)
    word = `${OneToNIne(reminderArray[1])} lack ${TenThousandToNinetynineThousandNineHundredNintynine(reminderArray[1])}`;
    return word;
  }
  
  return word;
}

console.log("Converted Number is", convertNumberToWord(number))
