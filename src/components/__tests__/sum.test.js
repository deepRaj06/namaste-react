import { sum } from "../sum"

// test("", () => {}) i.e. test function containing two arguments i.e. string(decsription of test) and function(code to test)
test("Sum function should calculate the sum of two numbers", () => {

    const result = sum(3, 4);

    // assertion
    expect(result).toBe(7);
})