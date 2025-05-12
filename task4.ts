
type TCar ={
  make: string;
  model: string;
  year: number;
}

const cars: TCar[] = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2022 },
  { make: "Chevrolet", model: "Malibu", year: 2015 }
];

const sortCarsByYear=(carArray: TCar[]): TCar[] =>{
  return carArray.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
