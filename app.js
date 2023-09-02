import {
  JavaScriptTester,
  JavaTester,
  PythonTester,
  CppTester,
} from "./compilers/index.js";
import { LanguageEnum } from "./enums/index.js";
import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import {
  functionNames,
  testCasesAverage,
  testCasesPrimeFactors,
} from "./test/sourceCodes/testcases/testCases.js";
const __dirname = dirname(fileURLToPath(import.meta.url));

const codeFilePath = "./test/sourceCodes/java/Main.java";
const functionName = functionNames.testCasesPrimeFactors;
const data = fs.readFileSync(path.resolve(__dirname, codeFilePath), "utf-8");
const tester = new JavaTester(testCasesPrimeFactors, data, functionName);
const testResult = tester.testResult();
testResult.forEach((result, index) => {
  console.log(result);
});
