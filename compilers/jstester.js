import JsChecker from "./inputChecker/jsChecker.js";
import { parse } from "acorn";
import { simple as walk } from "acorn-walk";

class JavaScriptTester {
  constructor(testCases, code, functionName) {
    this.testCases = testCases;
    this.code = code;
    this.functionName = functionName;
  }

  runTestCases() {
    const results = [];

    for (let i = 0; i < this.testCases.length; i++) {
      const testCase = this.testCases[i];
      const input = testCase.inputs;
      const expectedOutput = testCase.output;
      const trimmedFunction = this.getFunctionBody(this.functionName);

      const functionInput = this.testCases[i].inputs.map((input) =>
        new JsChecker(input).checker()
      );

      const jsCode = `
      ${trimmedFunction} 
        
      return ${this.functionName}(${functionInput})
      `;
      var newFunc = new Function(jsCode);
      let output = newFunc();

      output = JSON.stringify(output);
      const passed = this.compareOutputs(output, expectedOutput);
      const result = {
        testCase: i + 1,
        input: input.toString(),
        expectedOutput,
        output,
        passed,
      };

      results.push(result);
    }

    return results;
  }

  compareOutputs(output, expectedOutput) {
    return output === expectedOutput;
  }

  testResult() {
    const testResults = this.runTestCases();
    return testResults;
  }

  getFunctionBody(functionName) {
    const ast = parse(this.code, { sourceType: "module", ecmaVersion: 2020 });
    const code = this.code;

    let functionCode = "";
    walk(ast, {
      FunctionDeclaration(node) {
        if (node.id.name === functionName) {
          const functionStart = node.start;
          const functionEnd = node.end;
          functionCode = code.substring(functionStart, functionEnd);
        }
      },
    });
    return functionCode;
  }
}

export default JavaScriptTester;
