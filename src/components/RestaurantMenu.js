import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestuarantMenu = () => {

    
    const { resId } = useParams();
    console.log(resId)

    
    // Creating a custom hook to fetch data as per resId as RestaurantMenu work is to display the data
    // you can think of them as a helper functions
    // Remember to put helper functions inside utils folder
    const resInfo = useRestaurantMenu(resId);
    console.log("resInfo", resInfo)

    const [showIndex, setShowIndex] = useState(0);

    // props drilling
    const dummy = "dummy data";

    if(resInfo == null) return <Shimmer/>;

        // const {itemCards} = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
        const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
        // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    // console.log(resItemCards, "resItemCards");
    console.log("resItemDetailedInfo", resInfo?.cards[5])
    // so we divided each details of restaurant consoled above in categories by filtering them on Itemcategory
    // we cannot write dot directly with @type, so javascript provides another way to write it ["@type"]
    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(catg => catg.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories)

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* categories accordios */}

            { categories.map((category) => (
                // controlled component
                    <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItem={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} dummy={dummy}/>
            ))}
            {/* <ul>
                {
                    itemCards?.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price*0.01 || item?.card?.info?.defaultPrice * 0.01}</li>)
                }
                
            </ul> */}
        </div>
    )
}

export default RestuarantMenu