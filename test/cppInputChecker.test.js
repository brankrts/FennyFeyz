import CppChecker from "../compilers/inputChecker/cppChecker";

describe("CppChecker", () => {
  it("should convert string correctly", () => {
    const input = "hello";
    const cppChecker = new CppChecker(input);
    const result = cppChecker.checker();
    expect(result).toEqual(`"${input}"`);
  });

  it("should convert number correctly", () => {
    const input = 42;
    const cppChecker = new CppChecker(input);
    const result = cppChecker.checker();
    expect(result).toEqual(`int(${input})`);
  });

  it("should convert float correctly", () => {
    const input = 3.14;
    const cppChecker = new CppChecker(input);
    const result = cppChecker.checker();
    expect(result).toEqual(`double(${input})`);
  });

  it("should convert array correctly", () => {
    const input = [1, "hello", { key: "value" }];
    const cppChecker = new CppChecker(input);
    const result = cppChecker.checker();
    const expectedOutput = `{ int(1), "${input[1]}", std::map<std::string, std::any>{ { "key", "${input[2].key}" } } }`;
    expect(result).toEqual(expectedOutput);
  });

  it("should convert object correctly", () => {
    const input = { name: "John", age: 30 };
    const cppChecker = new CppChecker(input);
    const result = cppChecker.checker();
    const expectedOutput = `std::map<std::string, std::any>{ { "name", "John" }, { "age", int(30) } }`;
    expect(result).toEqual(expectedOutput);
  });

  it("should convert null correctly", () => {
    const input = null;
    const cppChecker = new CppChecker(input);
    const result = cppChecker.checker();
    expect(result).toEqual("not_supported");
  });

  it("should convert undefined correctly", () => {
    const input = undefined;
    const cppChecker = new CppChecker(input);
    const result = cppChecker.checker();
    expect(result).toEqual("not_supported");
  });
});
