import { sum } from "../sum";

// it takes two arguments - a string description and a test callback function

test("it calculate sum of two function", () => {
  const res = sum(1, 2);

  // expect function is used to test the output of the function
  //   assertion
  expect(res).toBe(3);
});
