import calculate from "../logic/calculate";

describe("Test on calculate.js calculate functions", () => {
  const state = {
    total: null,
    next: null,
    operation: null,
  };

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

  /* Recognising Input Numbers */

  test("Recognise input of one (1) number", () => {
    calculate(state, 'AC');
    expect(calculate(state, "1").next).toBe('1');
  })

  test("Recognise input of two (2) number", () => {
    calculate(state, 'AC');
    const doubleNumber = calculate(calculate(state, "3"), "6");
    expect(doubleNumber.next).toBe('36');
  })

  /* Test for Operations */

  test("Use the add (+) operator", () => {
    const addOperation = calculate(state, "+");
    expect(addOperation.operation).toBe("+");
  })
  test("Use the subtract (-) operator", () => {
    const subOperation = calculate(state, "-");
    expect(subOperation.operation).toBe("-");
  })
  test("Use the divide (÷) operator", () => {
    const divOperation = calculate(state, "÷");
    expect(divOperation.operation).toBe("÷");
  })
  test("Use the multiplication (x) operator", () => {
    const mulOperation = calculate(state, "x");
    expect(mulOperation.operation).toBe("x");
  })
  test("Use the modulus (%) operator", () => {
    const modOperation = calculate(state, "%");
    expect(modOperation.operation).toBe("%");
  })
});
