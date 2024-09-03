import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Body from "../Body";
import MOCK_DATA from "../mocks/resCardMock.json";
import { act } from "@testing-library/react";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA),
    })
  );
});

// integration testing
it("first body should be rendered with search button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const btn = screen.getByText("Search");

  const inputBox = screen.getByTestId("Search");

  fireEvent.change(inputBox, { target: { value: "burger" } });
  fireEvent.click(btn);

  const cards = await screen.findAllByTestId("resCard");

  console.log("🚀 ~ it ~ cards:", cards);

  expect(cards.length).toBe(2);
});

it("top rated res", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const btn = screen.getByText("Top Rated Restaurants");

  fireEvent.click(btn);

  const cards = await screen.findAllByTestId("resCard");

  expect(cards.length).toBe(2);
});
