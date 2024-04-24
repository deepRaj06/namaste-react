import { useEffect, useState } from "react" // This is a named import
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestuarantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [resItemCards, setResItemCards] = useState(null)
    const { resId } = useParams();
    console.log(resId)

    const API_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.671959&lng=77.298696&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true`

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();

        console.log(json);
        setResInfo(json?.data?.cards[2]?.card?.card?.info);

        const {itemCards} = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
        // console.log(itemCards);

        setResItemCards(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
    }

    if(resInfo == null) return <Shimmer/>;

    // console.log(resItemCards, "resItemCards");


    return (
        <div>
            <h1>{resInfo?.name}</h1>
            <p>{resInfo?.cuisines.join(", ")} - {resInfo?.costForTwoMessage}</p>
            <ul>
                {
                    resItemCards?.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price*0.01 || item?.card?.info?.defaultPrice * 0.01}</li>)
                }
                {/* <li>Biryani</li>
                <li>Burgers</li> */}
            </ul>
        </div>
    )
}

export default RestuarantMenu