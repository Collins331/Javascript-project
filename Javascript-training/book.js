class book {
  constructor(author, title, language, year, edition, age) {
    this.author = author;
    this.title = title;
    this.language = language;
    this.year = year;
    this.edition = edition;
    this.age = age;
  }
  topic(other) {
    this.title = other;
  }
  calculation() {
    let date = Date();
    //let now = new date();
    let pub = new Date(this.year);
    this.age = date - pub;

    return this.age;
  }
}

export default book;
