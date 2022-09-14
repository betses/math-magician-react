import operate from "../logic/operate";

describe("Test on operate.js operations", () => {
  test("Test add 20 and 30 to get 50", () => {
    const sum = operate(20, 30, "+");
    expect(sum).toBe("50");
  });
  test("Test substract 20 and 30 to get 50", () => {
    const sum = operate(50, 30, "-");
    expect(sum).toBe("20");
  });
});
