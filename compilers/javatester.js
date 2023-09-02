import { spawnSync } from "child_process";
import { unlinkSync, writeFileSync } from "fs";
import JavaChecker from "./inputChecker/javaChecker.js";
import MethodCollector from "./javaCodeParser/methodCollector.js";
import { parse } from "java-parser";
/*
import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import {
  functionNames,
  testCasesFactorial,
  testCasesSum,
} from "../test/sourceCodes/testcases/testCases.js";
import { testCasesGCD } from "../test/sourceCodes/testcases/testCases.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
*/

class JavaTester {
  //@param testCases : Algoritma uzerinde denenecek tum test senaryolari
  //@param code : Kullanicidan alinan algoritma kodu
  //@para funtionName : Algoritmanin icine yazilacagi fonksiyon ismi

  constructor(testCases, code, functionName) {
    this.testCases = testCases;
    this.code = code;
    this.functionName = functionName;
    this.clasName = "Main";
    this.methodCollector = new MethodCollector(this.code, this.functionName);
  }

  extractFunction() {
    const cst = parse(this.code);
    this.methodCollector.visit(cst);
    if (this.methodCollector.functionBody == null)
      throw `${this.functionName} not found`;
    return this.methodCollector.functionBody;
  }
  runJavaCode(code) {
    const javaFilePath = `Main.java`;
    writeFileSync(javaFilePath, code);

    const compileResult = spawnSync("javac", [javaFilePath]);
    if (compileResult.status !== 0) {
      console.error(
        "Error compiling Java code:",
        compileResult.stderr.toString()
      );
      return "";
    }
    const runResult = spawnSync("java", ["Main"], {
      encoding: "utf-8",
    });
    if (runResult.status !== 0) {
      console.error("Error executing Java code:", runResult.stderr.toString());
      return "";
    }

    unlinkSync(javaFilePath);
    unlinkSync(`Main.class`);

    return runResult.stdout.trim();
  }

  runTestCases() {
    const results = [];
    const matched = this.extractFunction();

    for (let i = 0; i < this.testCases.length; i++) {
      const testCase = this.testCases[i];
      const expectedOutput = testCase.output;
      const functionInput = this.testCases[i].inputs.map((input) =>
        new JavaChecker(input).checker()
      );

      const codeWithFunction = `
      import java.util.*;
      public class Main {
        ${matched}

        public static void main(String[] args) {
        System.out.println(new Main().${this.functionName}(${functionInput}));
       }
      }`;
      const output = this.runJavaCode(codeWithFunction, "");

      const result = {
        input: testCase.inputs.toString(),
        expectedOutput,
        output,
        passed: output.trim() === expectedOutput.trim(),
      };

      results.push(result);
    }

    return results;
  }

  testResult() {
    const testResults = this.runTestCases();
    const testResultArray = [];

    testResults.forEach((result, index) => {
      testResultArray.push({
        testCase: index + 1,
        input: result.input,
        expectedOutput: result.expectedOutput,
        output: result.output,
        passed: result.passed,
      });
    });

    return testResultArray;
  }
}

export default JavaTester;
/*
const codeFilePath = "../test/sourceCodes/java/Main.txt";
const functionName = functionNames.testCasesFactorial;
const data = fs.readFileSync(path.resolve(__dirname, codeFilePath), "utf-8");

const tester = new JavaTester(testCasesFactorial, data, functionName);
const testResult = tester.testResult();

testResult.forEach((result, index) => {
  console.log(result);
});
*/
