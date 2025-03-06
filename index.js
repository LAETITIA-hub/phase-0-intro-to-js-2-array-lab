// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(); 
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
   return [...cats, name]; 
}

function  prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1); 
 }
 function removeFirstCat() {
    return cats.slice(0, 1); 
 }
 function removeFirstCat(cats) {
    // Return a new array without the first cat
    return cats.slice(1);
}

function removeFirstCat() {
  return cats.slice(1); // Creates a new array without the first cat
}

const newCatsArray = removeFirstCat();

console.log("Original cats array:", cats); // ["Milo", "Otis", "Garfield"]
console.log("New cats array:", newCatsArray); // ["Otis", "Garfield"]
