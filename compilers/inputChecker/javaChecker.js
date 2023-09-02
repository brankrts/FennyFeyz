import { isFloat } from "../../util/util.js";

class JavaChecker {
  constructor(input) {
    this.input = input;
  }

  javaTypeConverter = (input) => {
    if (Array.isArray(input)) {
      const innerConversions = input.map(this.javaTypeConverter).join(", ");
      const innerTye = "";
      if (innerConversions.every((x) => typeof x === "number")) {
        innerTye = "int[]";
      } else if (innerConversions.every((x) => typeof x === "string")) {
        innerTye = "String[]";
      } else if (innerConversions.every((x) => isFloat(x))) {
        innerTye = "double[]";
      } else if (innerConversions.every((x) => Array.isArray(x))) {
        if (x.every((y) => typeof y === "number")) {
          innerTye == "int[][]";
        } else if (x.every((y) => isFloat(y))) {
          innerTye = "double[][]";
        } else if (x.every((y) => typeof y === "string")) {
          innerTye = "String[][]";
        } else {
          innerTye = "Object[][]";
        }
      } else {
        innerTye = "Object[]";
      }
      return `new ${innerTye}{${innerConversions}}`;
    } else if (typeof input === "object" && input !== null) {
      const keyValuePairs = Object.entries(input)
        .map(([key, value]) => `${key}: ${this.javaTypeConverter(value)}`)
        .join(", ");
      return `Map.ofEntries(${keyValuePairs})`;
    } else if (typeof input === "string") {
      return `"${input}"`;
    } else if (typeof input === "number") {
      return input.toString();
    } else {
      return "not_supported";
    }
  };

  checker = () => {
    return this.javaTypeConverter(this.input);
  };
}

export default JavaChecker;
