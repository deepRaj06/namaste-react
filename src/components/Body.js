import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "253988",
  //       name: "McDonald's",
  //       cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["American"],
  //       parentId: "630",
  //       avgRating: 3.1,
  //       sla: {
  //         slaString: "30 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "253989",
  //       name: "Namastey Burger",
  //       cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["American"],
  //       parentId: "630",
  //       avgRating: 4.5,
  //       sla: {
  //         slaString: "30 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "253990",
  //       name: "Namastey Burger",
  //       cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["American"],
  //       parentId: "630",
  //       avgRating: 4.1,
  //       sla: {
  //         slaString: "30 mins",
  //       },
  //     },
  //   },
  // ];

  // Local State variable by react - super powerful variable
  const [listofRestaurants, setListofRestaurants] = useState(
    resList
  //   [
  //     {
  //       info: {
  //         id: "253988",
  //         name: "McDonald's",
  //         cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["American"],
  //         parentId: "630",
  //         avgRating: 3.1,
  //         sla: {
  //           slaString: "30 mins",
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "253989",
  //         name: "Namastey Burger",
  //         cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["American"],
  //         parentId: "630",
  //         avgRating: 4.5,
  //         sla: {
  //           slaString: "30 mins",
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "253990",
  //         name: "Namastey Burger",
  //         cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["American"],
  //         parentId: "630",
  //         avgRating: 4.1,
  //         sla: {
  //           slaString: "30 mins",
  //         },
  //       },
  //     },
  
  // ]
  );

  // setListofRestaurants is used to update the listOfRestaurantsJS. 

  // normal js variable
  let listOfRestaurantsJS = []

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("Button clicked!");
            const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4);
            console.log("listofRestaurants", filteredList);

            setListofRestaurants(filteredList)
          }}
          onMouseOver={() => {
            console.log("Button clicked!");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard
            resData={restaurant}
            key={restaurant?.restaurant?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
