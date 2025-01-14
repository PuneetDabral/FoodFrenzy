import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { setUserInfo } = useContext(UserContext);

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  // console.log('Body rendered');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    let updatedData =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (res) => res.info
      );

    // console.log(json);
    // * optional chaining
    // setListOfRestaurants(json.data.cards[2].data.data.cards);
    setListOfRestaurants(updatedData);
    setFilteredRestaurant(updatedData);
  };

  const onlineStatus = useOnlineStatus();

  const PromotedResCard = RestaurantCardPromoted(RestaurantCard);

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Looks like you're offline! Please check your internet connection
      </h1>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="Search"
            placeholder="Search a restaurant you want..."
            className="searchBox border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // * Filter the restaurant cards and update the UI
              // * searchText

              const filteredRestaurant = listOfRestaurants?.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              // * Filter logic
              const filteredList = listOfRestaurants?.filter(
                (res) => parseFloat(res.avgRating) > 4
              );

              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <div>
            <label>UserName : </label>
            <input
              className="p-2 border border-black"
              onChange={(e) => {
                setUserInfo({ name: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant?.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}
          >
            {restaurant.promoted ? (
              <PromotedResCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const RestaurantCardPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
        <RestaurantCard {...props} />
        <div className="promoted-tag">Promoted</div>
      </div>
    );
  };
};

export default Body;
