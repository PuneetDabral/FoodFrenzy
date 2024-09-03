import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  index,
  data,
  showItems,
  showIndex,
  setShowIndex,
  closeAccordion,
  dummy,
}) => {
  const handleClick = () => {
    if (index === showIndex) {
      closeAccordion();
      return;
    }
    setShowIndex();
  };

  return (
    <div>
      {/*Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordion Body */}

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
