import calculate from "../logic/calculate";

describe("Test on calculate.js calculate functions", () => {
  test("Test AC button on calculator", () => {
    const result = calculate({ total: "222", next: "75", operation: "" }, "AC");
    expect(result).toStrictEqual({ total: null, next: null, operation: null });
  });

  test("Test = button on calculator", () => {
    const result = calculate({ total: "1000", next: "7", operation: "x" }, "=");
    expect(result).toStrictEqual({
      total: "7000",
      next: null,
      operation: null,
    });
  });

  test("Test +/- button on calculator", () => {
    const result = calculate(
      { total: -12, next: null, operation: null },
      "+/-"
    );
    expect(result).toStrictEqual({
      total: "12",
      next: null,
      operation: null,
    });
  });
});
