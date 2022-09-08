const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "cStatus"

function removeArrayElement(filterField) {

    // write your solution here
    // for(i=0;i<array.length;i++){
    //     if(array[i].field == filterField){
    //         array.splice(i,1);
    //     }
    // }
    let newArray = array.filter((value,index)=>{ 
        return value.field != filterField
       
    })
    // console.log(newArray);
    return (JSON.stringify(newArray)); 
}

console.log(`filtered array: ${removeArrayElement(filterField)}`);