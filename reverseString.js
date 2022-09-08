let str = "Javascript is awesome";
function reverseString(string) {
  let reverseStringIs = [];

  for (i = string.length - 1; i >= 0; i--) {
    reverseStringIs.push(string[i]);
  }
  return reverseStringIs.join("");
}

console.log("Reverse String is: ", reverseString(str));
let a = 5; a = 10;
console.log(a);

let Brandname="Scaler";
let newBrandName = Brandname.toLowerCase();
console.log(newBrandName);

let s1 = Symbol();
let s2 = Symbol('javascript');
console.log(s1,"  ",s2);
let car = {
  name: "Maruti",
  model: "Swift",
  color: "red", 
  price: 550000,
  about: function(country){
      return `This is a ${this.model}, of ${this.color} color. and orgin ${country}`;
  }
}
let car2 = {
  name: "toyata",
  model: "inova",
  color: "red", 
  price: 550000,
  
}


console.log(car.about.call(car2,"india"));
console.log(car.about.apply(car2,["india"]));
let binde =  car.about.bind(car2);
console.log(binde("india"));

let dname = "Aryan"

const mainFunction = () => {
  console.log(dname)
}

mainFunction() // Aryan
console.log(dname) // Aryan

let fullName = "Vaibhav Deshmukh rahatani";
let position = fullName.search("a",{a});
console.log(position);

const myArray = ["An", "article", "from", "Scaler", "Topics", 1, 5, true, null];
console.log(myArray);
