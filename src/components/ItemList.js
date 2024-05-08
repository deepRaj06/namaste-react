import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {

    // console.log(items)
    // console.log(dummy)

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        // passing pizza as action.payload
        // it is passed to addItem reducer in second parameter i.e. action
        // when you do action.payload, you'll get pizza
        dispatch(addItem(item))
    }

    return (
        <div>
            {items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">

                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice}</span>
                        </div>
                        <p className="text-xs ">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button 
                                className="p-2 mx-16  rounded-lg bg-black text-white shadow-lg absolute" 
                                // handleAddItem(item) means you have called this function already (don't write like this)
                                // onClick={handleAddItem(item)}

                                onClick={() => handleAddItem(item)}
                            >Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;