class PythonChecker {
  constructor(input) {
    this.input = input;
  }

  pythonTypeConverter = (input) => {
    if (Array.isArray(input)) {
      const innerConversions = input.map(this.pythonTypeConverter).join(", ");
      return `[${innerConversions}]`;
    } else if (typeof input === "object" && input !== null) {
      const keyValuePairs = Object.entries(input)
        .map(([key, value]) => `${key}: ${this.pythonTypeConverter(value)}`)
        .join(", ");
      return `{${keyValuePairs}}`;
    } else if (typeof input === "string") {
      return `"${input}"`;
    } else if (typeof input === "number") {
      return input.toString();
    } else {
      return "not_supported";
    }
  };

  checker = () => {
    return this.pythonTypeConverter(this.input);
  };
}

export default PythonChecker;
