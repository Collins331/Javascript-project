import book from "./book.js";

const Lit = new book(
  "Henry Ole Kulet",
  "Blossoms of the Savannah",
  "English",
  2010,
  "Third Edition",
  5
);

console.log("Title before: ", Lit.title);
Lit.topic("Chauvinism");

console.log("Author: ", Lit.author);
console.log("Title: ", Lit.title);
console.log("Language: ", Lit.language);
console.log("Year: ", Lit.year);
//console.log("Topic: ", Lit.tit);
console.log("Age: ", Lit.calculation());
