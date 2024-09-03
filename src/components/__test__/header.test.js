import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("should load header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // get by text is not a good wey to find button
    // const loginText = screen.getByText("Login");
    // specific search for button if we have multiple buttons
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
  it("should render cart items when it is zero", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // get by text is not a good wey to find button
    // const loginText = screen.getByText("Login");
    // specific search for button if we have multiple buttons
    // const cartItem = screen.getByText("Cart(0)");
    // you can also write regex to find the text
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
  });

  it("when we click on login button, it should change to logout", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    // to perform any action on button we use fireEvent
    fireEvent.click(loginButton);

    const logOut = screen.getByRole("button", { name: "Logout" });
    expect(logOut).toBeInTheDocument();
  });
});
