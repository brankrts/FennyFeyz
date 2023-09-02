import { it, describe, expect } from "@jest/globals";
import fs from "fs";
import path from "path";
import { PythonTester } from "../compilers";
import {
  testCasesFactorial,
  testCasesSum,
  functionNames,
  testCasesFibonacci,
  testCasesIsPrime,
  testCasesMaxElement,
  testCasesAverage,
  testCasesPerfectNumber,
  testCasesIsPalindrome,
  testCasesSortAscending,
  testCasesGCD,
  testCasesPrimeFactors,
} from "./sourceCodes/testcases/testCases";

const codeFilePath = "./sourceCodes/python/main.py";

describe("PythonTester", () => {
  it("sum of two numbers", () => {
    const functionName = functionNames.testCasesSum;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesSum, data, functionName);
    const testResult = tester.testResult();

    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });

  it("factorial", () => {
    const functionName = functionNames.testCasesFactorial;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesFactorial, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
  it("fibonacci", () => {
    const functionName = functionNames.testCasesFibonacci;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesFibonacci, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
  it("prime numbers", () => {
    const functionName = functionNames.testCasesIsPrime;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesIsPrime, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
  it("max elemnt in array", () => {
    const functionName = functionNames.testCasesMaxElement;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesMaxElement, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
  it("array average", () => {
    const functionName = functionNames.testCasesAverage;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesAverage, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
  it("is perfect number", () => {
    const functionName = functionNames.testCasesPerfectNumber;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesPerfectNumber, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
  it("is palindrome", () => {
    const functionName = functionNames.testCasesIsPalindrome;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesIsPalindrome, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
  it("sort ascending", () => {
    const functionName = functionNames.testCasesSortAscending;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesSortAscending, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
  it("gcd -> Finding the greatest common divisor with Euclidean Algorithm  ", () => {
    const functionName = functionNames.testCasesGCD;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesGCD, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
  it("prime factors", () => {
    const functionName = functionNames.testCasesPrimeFactors;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesPrimeFactors, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
  it("matrix multiplication", () => {
    const functionName = functionNames.testCasesGCD;
    const data = fs.readFileSync(
      path.resolve(__dirname, codeFilePath),
      "utf-8"
    );

    const tester = new PythonTester(testCasesGCD, data, functionName);
    const testResult = tester.testResult();
    testResult.forEach((result, index) => {
      expect(result.passed).toEqual(true);
    });
  });
});
