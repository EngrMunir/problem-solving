
const numbers: number[] = [3, 8, 5, 10, 2, 7, 6];


const sumEvenNumbers=(arr: number[]): number =>{
  return arr.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

const evenSum = sumEvenNumbers(numbers);
console.log("Sum of even numbers:", evenSum);
