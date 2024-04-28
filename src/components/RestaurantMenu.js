import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestuarantMenu = () => {

    
    const { resId } = useParams();
    console.log(resId)

    
    // Creating a custom hook to fetch data as per resId as RestaurantMenu work is to display the data
    // you can think of them as a helper functions
    // Remember to put helper functions inside utils folder
    const resInfo = useRestaurantMenu(resId);

    if(resInfo == null) return <Shimmer/>;

        // const {itemCards} = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
        const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
        const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    // console.log(resItemCards, "resItemCards");


    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {
                    itemCards?.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price*0.01 || item?.card?.info?.defaultPrice * 0.01}</li>)
                }
                {/* <li>Biryani</li>
                <li>Burgers</li> */}
            </ul>
        </div>
    )
}

export default RestuarantMenu