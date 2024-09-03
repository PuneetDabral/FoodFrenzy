import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Body from "./components/Body";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/cart";

// import Header from "./components/Header/container";
// import Body from "./components/Body/container";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About/container";
// import Contact from "./components/contact";
// import Error from "./components/error";
// import RestaurantMenu from "./components/restaurantMenu";
// import Grocery from "./components/Grocery";

// it only fetch when the component is rendered
// new js file in network tab is comes  when this component is rendered
// or basically on demand load , fetch

// now we have two bundle one is main bundle and other is grocery bundle
const Grocery = React.lazy(() => import("./components/Grocery"));

// / * Props :

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

// * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/

// diffrent small js bundle for diffrent features so that load time is reduced
//  code splitting is a technique used in modern web development to split the code
//  into various bundles which can be loaded on demand or in parallel. This helps in reducing the initial load time of the application.

// all the code does not come at once , it only comes when it is requested

// chunking
// code splitting
//  lazy loading
// dynamic loading
// dynamic imports
// on demand loading

const AppLayout = () => {
  const [userInfo, setUserInfo] = React.useState();
  React.useEffect(() => {
    setUserInfo({
      name: "Puneet",
    });
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// what is react router dom why we use it
// React Router is a standard library for routing in React.
//  It enables the navigation among views of various components in a React Application,
// allows changing the browser URL, and keeps UI in sync with the URL.

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

// ReactDom is used to render the react components in the DOM it converts the react components into the DOM elements and displays them on the screen

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
