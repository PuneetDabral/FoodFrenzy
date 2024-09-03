import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should render Contact component", () => {
  // this ill be rendered in js dom
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should render button inside Contact component", () => {
  // this ill be rendered in js dom
  render(<Contact />);

  //   const button =screen.getByText("Submit");

  //   role can be a heading, button, form, input, etc

  //   but if it is match by multiple elements then it will throw an error then you have to use get all by role
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should render input inside Contact component", () => {
  // this ill be rendered in js dom
  render(<Contact />);

  const input = screen.getByPlaceholderText("name");
  expect(input).toBeInTheDocument();
});

test("should load 2 input boxes on the contact component", () => {
  render(<Contact />);
  //   get all the elements with the role of input and store them in the input variable

  //   queryn ing
  const input = screen.getAllByRole("textbox");
  //   check the length of the input variable

  expect(input).toHaveLength(2);
});

// you can make a group also

// inserted of test you can use it also

// describe("Contact Component", () => {
//   test("should render Contact component", () => {
//     // this ill be rendered in js dom
//     render(<Contact />);
//     const heading = screen.getByRole("heading");
//     expect(heading).toBeInTheDocument();
//   });

//   test("should render button inside Contact component", () => {
//     // this ill be rendered in js dom
//     render(<Contact />);
//     const button = screen.getByRole("button");
//     expect(button).toBeInTheDocument();
//   });

//   test("should render input inside Contact component", () => {
//     // this ill be rendered in js dom
//     render(<Contact />);
//     const input = screen.getByPlaceholderText("name");
//     expect(input).toBeInTheDocument();
//   });

//   test("should load 2 input boxes on the contact component", () => {
//     render(<Contact />);
//     const input = screen.getAllByRole("textbox");

//     expect(input).toHaveLength(2);
//   });
// });
//   describe is used to group the test cases
//   it is used to group the test cases in a single group
