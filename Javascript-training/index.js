/**
 * Objects - are special structures that hold various data type
 * Objects can have have other objects inside it
 */

const Collins = {
  name: "Collins Oduor",
  age: 20,
  height: "170 cm",
  weight: "60kg",
  favorites: {
    team: "Man City",
    player: "Foden",
    passion: "Coding",
    game: "Football",
    music: {
      oldies: "Country Music",
      rhumba: "Jonny Junior",
      Reggea: "Lucky Dube",
      Ohangla: "Prince Indah",
      gospel: "Guardian Angel",
      Bongo: ["Rayvanny", "Jay Melody", "Diamond Platinumz"],
    },
    programming: ["JavaScript", "C", "React"],
    color: "Blue",
  },
};
const education = {
  primary: "Manyala",
  secondary: "Kowet",
  tertiary: {
    university: {
      name: "Nairobi University",
      course:
        "Bachelor of science in medical laboratory science and technology",
      registration: "H38/5007/2022",
      role: "student",
      period: "4 years",
    },
    institute: {
      name: "Aspire Leadership Institute",
      course: "Leadership Development",
      role: "Alumni",
      period: "8 months",
    },
  },
};

console.log("Age: ", Collins.age, "Height: ", Collins.height);
console.log("Education background:", education);
