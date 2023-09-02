import PythonChecker from "../compilers/inputChecker/pythonChecker";

describe("PythonChecker", () => {
  it("should convert string correctly", () => {
    const input = "hello";
    const pythonChecker = new PythonChecker(input);
    const result = pythonChecker.checker();
    expect(result).toEqual(`"${input}"`);
  });

  it("should convert number correctly", () => {
    const input = 42;
    const pythonChecker = new PythonChecker(input);
    const result = pythonChecker.checker();
    expect(result).toEqual(input.toString());
  });

  it("should convert float correctly", () => {
    const input = 3.14;
    const pythonChecker = new PythonChecker(input);
    const result = pythonChecker.checker();
    expect(result).toEqual(input.toString());
  });

  it("should convert array correctly", () => {
    const input = [1, "hello", { key: "value" }];
    const pythonChecker = new PythonChecker(input);
    const result = pythonChecker.checker();
    const expectedOutput = `[1, "hello", {key: "value"}]`;
    expect(result).toEqual(expectedOutput);
  });

  it("should convert object correctly", () => {
    const input = { name: "John", age: 30 };
    const pythonChecker = new PythonChecker(input);
    const result = pythonChecker.checker();
    const expectedOutput = `{name: "John", age: 30}`;
    expect(result).toEqual(expectedOutput);
  });

  it("should convert null correctly", () => {
    const input = null;
    const pythonChecker = new PythonChecker(input);
    const result = pythonChecker.checker();
    expect(result).toEqual("not_supported");
  });

  it("should convert undefined correctly", () => {
    const input = undefined;
    const pythonChecker = new PythonChecker(input);
    const result = pythonChecker.checker();
    expect(result).toEqual("not_supported");
  });
});
