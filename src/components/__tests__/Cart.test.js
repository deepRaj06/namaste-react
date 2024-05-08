// It is going to test the Cart functionality
// When you goto particular item --> click on add item --> two things happen
// --> header section updated and --> cart component got updated


import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestuarantMenu from "../RestaurantMenu";
import MOCK_DATA from '../mocks/mockResMenu.json';
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
 
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("should load restuarant menu component", async () => {
    // 1. Whenever RestuarantMenu is rendered need BrowserRouter and mock API as network call is made
    await act(async () => render(<BrowserRouter><Provider store={appStore}><Header/><RestuarantMenu /><Cart/></Provider></BrowserRouter>));

    const accordionHeader = screen.getByText("Double Patty Burgers (9)")

    // 2. Now we'll click on accordion
    fireEvent.click(accordionHeader)
    // as soon as you click on add item, it will try to update store but couldn't find store
    // for that you need to provide store to restuarantmenu

    // 3. To know restaurant items when accordion is expanded provide test-id to itemList.js
    // This is making sure we are opening the right accordion
    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(9);

    // 4. Find the add button
    const addBtns = screen.getAllByRole("button", { name: "Add +"});

    // 5. Clicking on first button
    fireEvent.click(addBtns[0])
    // when i click on addbtn, header is rendered
    // how can we check?
    // provide header in above render

    // 6. to find 1 item in headr
    const headerCartItems = screen.getByText("Cart (1 items)")
    expect(headerCartItems).toBeInTheDocument();

    // 7. Clicking on second button
    fireEvent.click(addBtns[1])
 
    // 8. to find 2 item in headr
    const headerCartItems2 = screen.getByText("Cart (2 items)")
    expect(headerCartItems2).toBeInTheDocument();   

    // 9. to find items in cart component
    const headerCartItems3 = screen.getAllByTestId("foodItems")
    expect(headerCartItems3.length).toBe(11);   

    // 
    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
    expect(headerCartItems3.length).toBe(11); 
    
    expect(screen.getByText("Your cart is empty! Add something to see items")).toBeInTheDocument();   





})