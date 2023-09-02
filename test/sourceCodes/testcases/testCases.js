export const functionNames = {
  testCasesSum: "add",
  testCasesFactorial: "factorial",
  testCasesFibonacci: "fibonacci",
  testCasesIsPrime: "is_prime",
  testCasesMaxElement: "max_element",
  testCasesAverage: "calculate_average",
  testCasesPerfectNumber: "is_perfect_number",
  testCasesIsPalindrome: "is_palindrome",
  testCasesSortAscending: "sort_ascending",
  testCasesGCD: "gcd",
  testCasesPrimeFactors: "prime_factors",
  testCasesMatrixMultiplication: "matrix_multiplication",
};
export const testCasesAverage = [
  { inputs: [[1, 2, 3, 4, 5]], output: "3.0" },
  { inputs: [[2, 4, 6, 8, 10]], output: "6.0" },
];

export const testCasesSum = [
  {
    inputs: [2, 3],
    output: "5",
  },
  {
    inputs: [5, 7],
    output: "12",
  },
];

export const testCasesFactorial = [
  {
    inputs: [5],
    output: "120",
  },
  {
    inputs: [0],
    output: "1",
  },
];
export const testCasesFibonacci = [
  { inputs: [0], output: "0" },
  { inputs: [1], output: "1" },
  { inputs: [5], output: "5" },
];
export const testCasesIsPrime = [
  { inputs: [2], output: "True" },
  { inputs: [4], output: "False" },
  { inputs: [17], output: "True" },
];
export const testCasesMaxElement = [
  { inputs: [[1, 2, 3, 4, 5]], output: "5" },
  { inputs: [[-3, -1, -7, -2]], output: "-1" },
];
export const testCasesPerfectNumber = [
  { inputs: [6], output: "True" },
  { inputs: [28], output: "True" },
  { inputs: [12], output: "False" },
];

export const testCasesIsPalindrome = [
  { inputs: [121], output: "True" },
  { inputs: [12321], output: "True" },
  { inputs: [12345], output: "False" },
];

export const testCasesSortAscending = [
  { inputs: [[3, 1, 4, 1, 5, 9]], output: "[1, 1, 3, 4, 5, 9]" },
  {
    inputs: [[9, 8, 7, 6, 5, 4, 3, 2, 1]],
    output: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
  },
];

export const testCasesGCD = [
  { inputs: [48, 18], output: "6" },
  { inputs: [27, 36], output: "9" },
  { inputs: [17, 23], output: "1" },
];

export const testCasesPrimeFactors = [
  { inputs: [48], output: "[2, 2, 2, 2, 3]" },
  { inputs: [90], output: "[2, 3, 3, 5]" },
  { inputs: [17], output: "[17]" },
];

export const testCasesMatrixMultiplication = [
  {
    inputs: [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    ],
    output: "[[30, 36, 42], [66, 81, 96], [102, 126, 150]]",
  },
];
