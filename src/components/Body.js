import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  // // Local State variable by react - super powerful variable
  // const [listofRestaurants, setListofRestaurants] = useState([]
  // resList
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
  // );

  // Local State variable by react - super powerful variable
  const [listofRestaurants, setListofRestaurants] = useState([])
  // filter state
  const [searchText, setSearchText] = useState('')
  // filtered restuarant
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  // setListofRestaurants is used to update the listOfRestaurantsJS. 

  // normal js variable
  // let listOfRestaurantsJS = []

  // useEffect 

  // working will be like
  // after completely rendering Body.js, useEffect function will be called.
  // i.e. Body.js(rendering --> callback function of useEffect() will be called.)
  useEffect(() => {
    console.log("useeffect called")  // printed 2nd
    // fetch is provided by browsers
    fetchData();
  }, []);

  // 28.743025092034216, 77.11133322539672
  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING")
    // new api
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.671959&lng=77.298696&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // new api with cors plugin --> https://cors.sh/ + ? + url
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.671959&lng=77.298696&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")



    const json = await data.json()
    console.log("json", json);
    // json.data.success.cards
    // now we are going to render dynamic data we are getting from API and setting it into setListOfRestaurants
    // setListofRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setListofRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // checking online/offline status

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return (
      <h1>
        Looks like you're offline! Please check your internet connection;
      </h1>
    )
  }

  // whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body rendered")  // printed 1st

  // conditional rendering
  // if(listofRestaurants.length === 0){
  //   return <Shimmer />
  // }


  // instead of conditional rendering, we'll use ternary operator
  return listofRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter flex ">
        {/* Search Div Starts*/}
        <div className="search m-4 p-4">

          <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value)} />

          <button 
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
            // Filter the restaurant cards and update the UI
            // searchText - To get that data from input box, we need to get that from value
            console.log(searchText)
            // filter logic over Restaurant List
            const filteredRestaurant = listofRestaurants.filter((res) => {
              console.log("filteredRestaurant", res)
              return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())

            });
            // console.log("filteredRestaurant", res)
            setFilteredRestaurant(filteredRestaurant)
          }}>Search</button>
        </div>
        {/* Search Div Ends*/}
        <div className="search m-4 p-4 flex items-center rounded-lg">
          <button
            className="filter-btn px-4 py-2 bg-gray-50"
            onClick={() => {
              // console.log("Button clicked!");
              const filteredList = listofRestaurants?.filter((res) => res.info.avgRating > 4);
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
        
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link key={restaurant?.info?.id}
            to={`/restaurants/${restaurant?.info?.id}`}>
            <RestaurantCard
              resData={restaurant}
            />
          </Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
