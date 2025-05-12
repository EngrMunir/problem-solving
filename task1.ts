
type TPerson ={
  name: string;
  age: number;
  gender: 'male' | 'female';
}

const people: TPerson[] = [
  { name: "Munir", age: 25, gender: "male" },
  { name: "Sihab", age: 30, gender: "male" },
  { name: "Saznin", age: 28, gender: "female" },
  { name: "Rupa", age: 30, gender: "female" },
  { name: "Fauzia", age: 28, gender: "female" }
];


const getMaleNames=(people: TPerson[]): string[] =>{
  const males = people.filter(person => person.gender === "male");
  const maleNames = males.map(male => male.name);

  return maleNames;               
}

const maleNames = getMaleNames(people);
console.log(maleNames);
