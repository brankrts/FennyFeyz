import { parse, BaseJavaCstVisitorWithDefaults } from "java-parser";

export default class MethodCollector extends BaseJavaCstVisitorWithDefaults {
  constructor(code, functionName) {
    super();
    this.customResult = [];
    this.validateVisitor();
    this.functionName = functionName;
    this.code = code;
    this.functionBody = null;
  }
  classMemberDeclaration(ctx) {
    let functionName = "";

    if (
      ctx.methodDeclaration[0].children.methodHeader[0].children
        .methodDeclarator[0].children.Identifier[0].image != undefined
    ) {
      functionName =
        ctx.methodDeclaration[0].children.methodHeader[0].children
          .methodDeclarator[0].children.Identifier[0].image;
    }
    if (this.functionName === functionName) {
      this.startPoint = ctx.methodDeclaration[0].location.startLine;
      this.endPoint = ctx.methodDeclaration[0].location.endLine;
      this.customResult.push({
        startLine: this.startLine,
        endLine: this.endLine,
      });
      const lines = this.code.split("\n");

      const slicedCode = lines
        .slice(this.startPoint - 1, this.endPoint)
        .join("\n");

      if (functionName != null) {
        this.functionBody = slicedCode;
      }
    }
  }
}
