
type TBook ={
  title: string;
  author: string;
  year: number;
}

const books: TBook[] = [
  { title: "Physics", author: "Shahjahan Tapan", year: 1998 },
  { title: "Chemistry", author: "3 Doctor", year: 2018 },
  { title: "Javascript", author: "jhankar mahbob", year: 2017 },
  { title: "Typescript", author: "Munir", year: 2022 }
];

const getBookTitles=(bookArray: TBook[]): string[]=> {
  return bookArray.map((book) => book.title);
}

const titles: string[] = getBookTitles(books);
console.log(titles);
