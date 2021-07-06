const programmers = [
  "Dennis Ritchie",
  "Brian Kernighan",
  "Ken Thompson",
  "Linus Torvalds",
  "Bjarne Stroustrup",
  "Tim Berners-Lee",
  "Donald Knuth",
  "Alan Turing",
  "Mark Zuckerberg",
  "Bill Gates",
  "Larry Page",
  "Elon Musk",
  "Jack Dorsey",
  "Satoshi Nakamoto",
  "Ada Lovelace",
  "Grace Hopper",
  "Dan Ambramov",
  "Jordan Walke",
  "Ryan Dahl",
  "David Heinemeier Hansson",
  "Guido van Rossum",
  "Yukihiro Matsumoto",
  "Sergey Brin",
  "Lyndsey Scott",
  "Abhinav Asthana", 
  "Abhijit Kane", 
  "Ankit Sobti",
  "Loi Tran",
  "Charles Lee",
  "Tuan Nguyen",
  "Tan Vo",
];


// for(let index = 0; index < programmers.length; index++){
//   const programmer = programmers[index];
//   console.log(programmer);
// }

//3.1
function threePointOne() {
  function printFirstName(element) {
    return element.split(" ")[0];
  }
  const newProgrammers = programmers.map(printFirstName);
  document.getElementById("3.1").innerHTML = newProgrammers.join(" ");
}
threePointOne();

//33.2
function threePointTwo() {
  function lastName(element) {
    return element.split(" ")[1];
  }
  const newProgrammers = programmers.map(lastName);
  document.getElementById("3.2").innerHTML = newProgrammers.join(" ");
}
threePointTwo();

//3.3
function threePointThree(){
  function sumCharFirstName(element){
    return element.split(" ")[0].length;
  }
  const newProgrammers = programmers.map(sumCharFirstName);
  document.getElementById("3.3").innerHTML = newProgrammers;
 }
   
 threePointThree();

//3.4
function threePointFour() {
  function sumCharLastName(element) {
    return element.split(" ")[1].length;
  }
  const newProgrammers = programmers.map(sumCharLastName);
  document.getElementById("3.4").innerHTML = newProgrammers;
}
threePointFour();

//3.5
function threePointFive(){
  function getName(element){
    return element.length;
  }
  const newProgrammers = programmers.map(getName);
  document.getElementById("3.5").innerHTML = newProgrammers;
}
threePointFive();
//3.6
function threePointSix() {
  function printFirstName(element) {
    console.log("printFirstName", element);
    return element.split(" ")[0];
  }
  const newProgrammers = programmers.map(printFirstName);
  newProgrammers.sort()
  document.getElementById("3.6").innerHTML = newProgrammers.join(" ");
}
threePointSix();
//3.7
function threePointseven() {
  function lastName(element) {
    return element.split(" ")[1];
  }
  const newProgrammers = programmers.map(lastName);
  document.getElementById("3.7").innerHTML = newProgrammers.sort().join(" ");
}
threePointseven();
//3.8
function threePointEight(){
  function sumCharFirstName(element){
    return element.split(" ")[0].length;
  }
  const newProgrammers = programmers.map(sumCharFirstName);
  document.getElementById("3.8").innerHTML = newProgrammers.sort();
 }   
 threePointEight();
 //3.9
 function threePointNine(){
  function sumCharLastName(element){
    return element.split(" ")[1].length;
  }
  const newProgrammers = programmers.map(sumCharLastName);
  document.getElementById("3.9").innerHTML = newProgrammers.sort();
 }   
 threePointNine();
 //3.10