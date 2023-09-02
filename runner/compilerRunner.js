import {
  PythonTester,
  JavaTester,
  JavaScriptTester,
  CppTester,
} from "../compilers/index.js";
import { LanguageEnum } from "../enums/index.js";

class CompilerRunner {
  constructor(testCases, langType, codeFilePath, functionName) {
    this.langType = langType;
    this.codeFilePath = codeFilePath;
    this.functionName = functionName;
    this.testCases = testCases;
    this.compiler = null;
    this.testCasesResult = "";
    this.code = "";
  }

  setCompiler() {
    switch (this.langType) {
      case LanguageEnum.PYTHON:
        this.compiler = new PythonTester(
          this.testCases,
          this.code,
          this.functionName
        );
        break;

      case LanguageEnum.CPP:
        this.compiler = new CppTester(
          this.testCases,
          this.code,
          this.functionName
        );
        break;

      case LanguageEnum.JAVASCRIPT:
        this.compiler = new JavaScriptTester(this.testCases, this.code);
        break;

      case LanguageEnum.JAVA:
        this.compiler = new JavaTester(
          this.testCases,
          this.code,
          this.functionName
        );
        break;

      default:
        console.error("Current language type is not supported ");
        break;
    }
  }
  compile() {
    try {
      fs.readFile(this.codeFilePath, "utf-8", (err, data) => {
        if (err) throw "File NotFound";

        this.code = data;
        this.setCompiler();

        this.testCasesResult = this.compiler.testResult();
        console.log(this.testCasesResult);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
