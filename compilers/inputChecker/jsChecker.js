class JsChecker {
  constructor(input) {
    this.input = input;
  }

  jsTypeConverter = (input) => {
    if (Array.isArray(input)) {
      const innerConversions = input.map(this.jsTypeConverter).join(", ");
      return `[${innerConversions}]`;
    } else if (input instanceof Map) {
      const keyValuePairs = Array.from(input.entries())
        .map(([key, value]) => `["${key}", ${this.jsTypeConverter(value)}]`)
        .join(", ");
      return `new Map([${keyValuePairs}])`;
    } else if (typeof input === "object" && input !== null) {
      const keyValuePairs = Object.entries(input)
        .map(([key, value]) => `"${key}": ${this.jsTypeConverter(value)}`)
        .join(", ");
      return `{ ${keyValuePairs} }`;
    } else if (typeof input === "string") {
      return `"${input}"`;
    } else if (typeof input === "number") {
      if (Number.isInteger(input)) {
        return `${input}`;
      } else if (Number.isFinite(input)) {
        return `${input}`;
      } else {
        return "not_supported";
      }
    } else {
      return "not_supported";
    }
  };

  checker = () => {
    return this.jsTypeConverter(this.input);
  };
}

export default JsChecker;
