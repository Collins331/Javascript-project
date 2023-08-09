import personality from "./object.js";

const person = new personality(
  "Collins",
  20,
  60,
  "170 cm",
  "Luo",
  "Javascript"
);

console.log("My name is : ", person.name);
console.log("My age: ", person.age);
console.log("Weight: ", person.weight);
console.log("My height: ", person.height);
console.log("My Tribe: ", person.tribe);
console.log("Programming language: ", person.language);

const father = new personality("Linus", 65, 70, "180cm", "Luo", "Html & CSS");
console.log("My name is : ", father.name);
console.log("My age: ", father.age);
console.log("Weight: ", father.weight);
console.log("My height: ", father.height);
console.log("My Tribe: ", father.tribe);
console.log("Programming language: ", father.language);
