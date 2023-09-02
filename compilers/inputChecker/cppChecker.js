class CppChecker {
  constructor(input) {
    this.input = input;
  }

  cppTypeConverter = (input) => {
    if (Array.isArray(input)) {
      const innerConversions = input.map(this.cppTypeConverter).join(", ");
      return `{ ${innerConversions} }`;
    } else if (input instanceof Map) {
      const keyValuePairs = Array.from(input.entries())
        .map(([key, value]) => `{ "${key}", ${this.cppTypeConverter(value)} }`)
        .join(", ");
      return `std::map<std::string, std::any>{ ${keyValuePairs} }`;
    } else if (typeof input === "object" && input !== null) {
      const keyValuePairs = Object.entries(input)
        .map(([key, value]) => `{ "${key}", ${this.cppTypeConverter(value)} }`)
        .join(", ");
      return `std::map<std::string, std::any>{ ${keyValuePairs} }`;
    } else if (typeof input === "string") {
      return `"${input}"`;
    } else if (typeof input === "number") {
      if (Number.isInteger(input)) {
        return `int(${input})`;
      } else if (Number.isFinite(input)) {
        return `double(${input})`;
      } else {
        return "not_supported";
      }
    } else {
      return "not_supported";
    }
  };

  checker = () => {
    return this.cppTypeConverter(this.input);
  };
}

export default CppChecker;
