import JsChecker from "../compilers/inputChecker/jsChecker";

describe("JsChecker", () => {
  it("should convert string correctly", () => {
    const input = "hello";
    const jsChecker = new JsChecker(input);
    const result = jsChecker.checker();
    expect(result).toEqual(`"${input}"`);
  });

  it("should convert number correctly", () => {
    const input = 42;
    const jsChecker = new JsChecker(input);
    const result = jsChecker.checker();
    expect(result).toEqual(`${input}`);
  });

  it("should convert float correctly", () => {
    const input = 3.14;
    const jsChecker = new JsChecker(input);
    const result = jsChecker.checker();
    expect(result).toEqual(`${input}`);
  });

  it("should convert array correctly", () => {
    const input = [1, "hello", { key: "value" }];
    const jsChecker = new JsChecker(input);
    const result = jsChecker.checker();
    const expectedOutput = `[1, "hello", { "key": "value" }]`;
    expect(result).toEqual(expectedOutput);
  });

  it("should convert object correctly", () => {
    const input = { name: "John", age: 30 };
    const jsChecker = new JsChecker(input);
    const result = jsChecker.checker();
    const expectedOutput = `{ "name": "John", "age": 30 }`;
    expect(result).toEqual(expectedOutput);
  });

  it("should convert map correctly", () => {
    const input = new Map([
      ["name", "John"],
      ["age", 30],
    ]);
    const jsChecker = new JsChecker(input);
    const result = jsChecker.checker();
    const expectedOutput = `new Map([["name", "John"], ["age", 30]])`;
    expect(result).toEqual(expectedOutput);
  });
});
