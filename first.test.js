// Every single file is a suite
// We use either test or it
// Describe used to group tests

let myValue = 5;
let myName = "Prabhudev";
let myFav = ["Virat", "Rock", "Puneeth", "ABD"];
let numbers = [1, 2, 3];
let complexNumbers = [
  [1, 2, 3],
  [2, 2, 4],
  [4, 5, 9]
]

function add(x, y) {
  return x + y;
}

// Executes before each test
beforeEach(() => {
  console.log("Before test");
});

// Executes after each test
afterEach(() => {
  console.log("After test");
})

// Executes before All test
beforeAll(() => {
  console.log("Before All");
});

// Executes after All test
afterAll(() => {
  console.log("After All");
})

describe("All tests", () => {
  // test.only runs only this test
  // test.only("Runs only this test", () => {
  //   console.log("Runs only this test");
  // });

  // test.skip skips this test
  test.skip("Skips this test", () => {
    console.log("Skips this test");
  });

  test("First test", () => {
    expect(2+3).toBe(myValue);
    console.log("First test");
  });
  
  it("Second test", () => {
    expect(add(4, 5)).toBe(9);
    console.log("Second test");
  });

  it("Executes after 10sec", () => {
    console.log("Executes after 10sec");
  }, 10000);

  // Looping
  test.each(numbers)("Looping", myNum => {
    expect(add(2, myNum)).toBe(2 + myNum);
    console.log("Add 2 to"+ myNum);
  });

  test.each(complexNumbers)("Add %i to %i should be %i", (a, b, total) => {
    expect(add(a, b)).toBe(total);
    console.log(total);
  });

  
  /* Matchers (
    myValue = 5 &
    myName = "Prabhudev" &
    myFav = ["Virat", "Rock", "Puneeth", "ABD"]
  ) */
  it("Matchers", () => {
    expect(myValue).toBe(5); // pass (toBe ==)
    expect(myValue).toEqual(5); // pass (toBe ===)

    expect(myValue).toBeGreaterThan(0); // pass (toBeGreaterThan >)
    expect(myValue).toBeLessThan(7); // pass (toBeLessThan <)

    expect(myValue).toBeGreaterThanOrEqual(5); // pass (toBeGreaterThanOrEqual >=)
    expect(myValue).toBeLessThanOrEqual(5); // pass (toBeLessThanOrEqual <=)
  
    expect(myName).toMatch(/Pra/);
    expect(myName).toMatch(/pra/i);
    expect(myName).toMatch("Prabhudev");

    expect(myFav).toContain("Virat");
    expect(myFav).not.toContain("Rohit");
  });

  // Truthy and Falsy: false, 0, null, undefined, NaN, ""
  let p = null, q;
  it("Truthy and Falsy", () => {
    expect(p).toBeNull();
    expect(p).toBeDefined();
    expect(p).toBeFalsy();
    expect(p).not.toBeTruthy();

    expect(q).toBeUndefined();
    expect(q).toBeFalsy();
    expect(q).not.toBeTruthy();
  });

  // Testing errors - function
  function check() {
    throw new Error("Fatal mistake");
  }
  
  it("Testing errors", () => {
    expect(check).toThrow();
    expect(check).toThrow(Error);
    expect(check).toThrow("Fatal mistake");
    expect(check).toThrow(/fatal/i);
  })
});