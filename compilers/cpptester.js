import { spawnSync } from "child_process";
import { unlinkSync, writeFileSync } from "fs";
import CppChecker from "./inputChecker/cppChecker.js";

class CppTerster {
  code;
  functionName;
  testCases;
  constructor(testCases, code, functionName) {
    this.code = code;
    this.functionName = functionName;
    this.testCases = testCases;
    this.fileName = "main.cpp";
    this.regex = new RegExp(
      `\\b\\w+\\s+${this.functionName}\\s*\\([^)]*\\)\\s*\\{[^{}]*\\}`
    );
  }

  runTestCases() {
    const matches = this.code.match(this.regex);
    const results = [];

    this.testCases.forEach((testCase) => {
      const expectedOutput = testCase.output;

      if (matches) {
        const functionInput = testCase.inputs.map((input) =>
          new CppChecker(input).checker()
        );

        const codeWithFuntion = `
          #include <iostream>
          using namespace std;
          
          ${matches[0]}

            int main() {
              cout << ${this.functionName}(${functionInput}) << endl;
              return 0;
          }
          `;

        writeFileSync(this.fileName, codeWithFuntion);

        const compileResult = spawnSync("g++", [this.fileName, "-o", "main"]);
        if (compileResult.error) {
          console.log(compileResult.stderr.toString());
          unlinkSync(this.fileName, () => {});
          process.exit();
        }

        const executionResult = spawnSync(".\\main.exe");
        if (executionResult.error) {
          console.log(executionResult.stderr.toString());
          unlinkSync("main.exe", () => {});
          process.exit();
        }
        const output = executionResult.stdout.toString().trim();
        const result = {
          input: testCase.inputs.toString(),
          expectedOutput,
          output,
          passed: output.trim() === expectedOutput.trim(),
        };

        results.push(result);
        unlinkSync(this.fileName, () => {});
        unlinkSync("main.exe", () => {});
      } else {
        console.log("no function found");
      }
    });

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

export default CppTerster;
