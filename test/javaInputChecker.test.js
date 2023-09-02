import JavaChecker from "../compilers/inputChecker/javaChecker";

describe("JavaChecker", () => {
  it("should convert string correctly", () => {
    const input = "hello";
    const javaChecker = new JavaChecker(input);
    const result = javaChecker.checker();
    expect(result).toEqual(`"${input}"`);
  });

  it("should convert number correctly", () => {
    const input = 42;
    const javaChecker = new JavaChecker(input);
    const result = javaChecker.checker();
    expect(result).toEqual(input.toString());
  });

  it("should convert float correctly", () => {
    const input = 3.14;
    const javaChecker = new JavaChecker(input);
    const result = javaChecker.checker();
    expect(result).toEqual(input.toString());
  });

  it("should convert array correctly", () => {
    const input = [1, "hello", { key: "value" }];
    const javaChecker = new JavaChecker(input);
    const result = javaChecker.checker();
    const expectedOutput = `new Object[]{1, "hello", Map.ofEntries(key: "value")}`;
    expect(result).toEqual(expectedOutput);
  });

  it("should convert object correctly", () => {
    const input = { name: "John", age: 30 };
    const javaChecker = new JavaChecker(input);
    const result = javaChecker.checker();
    const expectedOutput = `Map.ofEntries(name: "John", age: 30)`;
    expect(result).toEqual(expectedOutput);
  });

  it("should convert null correctly", () => {
    const input = null;
    const javaChecker = new JavaChecker(input);
    const result = javaChecker.checker();
    expect(result).toEqual("not_supported");
  });

  it("should convert undefined correctly", () => {
    const input = undefined;
    const javaChecker = new JavaChecker(input);
    const result = javaChecker.checker();
    expect(result).toEqual("not_supported");
  });
});
