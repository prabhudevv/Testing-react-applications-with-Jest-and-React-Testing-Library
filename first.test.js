// Every single file is a suite
// We use either test or it
// Describe used to group tests

let myValue = 5;

function add(x, y) {
  return x + y;
}

describe("All tests", () => {
  test("First test", () => {
    expect(2+3).toBe(myValue);
  });
  
  it("Second test", () => {
    expect(add(4, 5)).toBe(9);
  });
});

