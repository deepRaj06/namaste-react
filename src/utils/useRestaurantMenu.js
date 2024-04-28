// Always start your custom hook with small use to let React know that this function is React custom hook
import { useEffect, useState } from "react";

const useRestaurantMenu = (resid) => {

    const [resInfo, setResInfo] = useState(null)
    // fetchData

    const API_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.671959&lng=77.298696&restaurantId=${resid}&catalog_qa=undefined&isMenuUx4=true`

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        setResInfo(json.data);
    }


    return resInfo;
}

export default useRestaurantMenu;