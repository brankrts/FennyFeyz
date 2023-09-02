import { spawnSync } from "child_process";
import PythonChecker from "./inputChecker/pythonChecker.js";

class PythonTester {
  //@param testCases : algoritmanin degerlendirilecegi test senaryolari icin bir dizi
  //@param code : algoritmanin kodu
  //@param functionName : algoritmanin icerisinde yazildigi fonksiyonun ismi

  code;
  testCases;
  functionName;

  constructor(testCases, code, functionName) {
    this.functionName = functionName;
    this.testCases = testCases;
    this.code = code;
  }

  runPythonCode(code) {
    const result = spawnSync("python", ["-c", `${code}`], {
      encoding: "utf-8",
    });
    return result.stdout.trim();
  }

  runTestCases() {
    const results = [];
    for (let i = 0; i < this.testCases.length; i++) {
      const expectedOutput = this.testCases[i].output;

      const functionInput = this.testCases[i].inputs.map((input) =>
        new PythonChecker(input).checker()
      );

      const codeWithFunction = `${this.code}\nprint(${this.functionName}(${functionInput}))`;
      const output = this.runPythonCode(codeWithFunction);

      const result = {
        input: this.testCases[i].inputs,
        expectedOutput,
        output: output,
        passed: output === expectedOutput,
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

export default PythonTester;
