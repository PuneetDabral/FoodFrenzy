import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { RestaurantCardPromoted } from "../Body";

it("card should render with props data", () => {
  // mock data concept
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  // This assertion is useful because it verifies that the RestaurantCard component
  //  is rendering the expected content ("Chinese Wok") to the DOM. Without this line,
  //  even if the getByText function found the element, you wouldn't be explicitly
  //  checking that the element is rendered in the DOM, which is the ultimate goal of the component.

  expect(name).toBeInTheDocument();
});

it("it should res card with promoted label", () => {
  // test hoc with permoted label
  const PromotedResCard = RestaurantCardPromoted(RestaurantCard);

  render(<PromotedResCard resData={MOCK_DATA} />);
  const promoted = screen.getByText("Promoted");
  expect(promoted).toBeInTheDocument();
});
