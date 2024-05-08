import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
// 2. mock fetch function
global.fetch = jest.fn(() => {
    // 3. fetch flow
    // fetch --> returns Promise --> which in turn return json --> returns Promise once again --> and when we reoslve 
    // that promise --> then we actually get that data
    return Promise.resolve({
        json: () => {
            // 4. MOCK_DATA --> mockResListData.json(data coming from fetch )
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should Search Res List for urger text input", async () => {

    // 1. Run this --> will throw an error --> fetch is not defined --> why?
    // it is rendering the body component on JS DOM which is Browser like --> but not rendering on actual browser
    // fetch is given by browser
    // so what we can do 
    // we can write mock function for our fetch(creating fake fetch)

    // 7. act function 
    await act( async () => render(<BrowserRouter><Body/></BrowserRouter>))


    // 14. getting all cards render data

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);
    // 8. after running above line, link related error comes in 
    // solution to 8 point --> wrap Body component inside BrowserRouter

    // 9. Finding search button
    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();

    // console.log(searchBtn);



    // 10. Now when we we write inside search box
    // it triggers onChangeEvent
    // How can we do test this

    // First get the searchInput - getByTestId --> when you don't have anything to get the input box
    // to get TestId --> first provide testid to input in Body.js
    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();

    // 11. onChange event is given by fireEvent
    // searchInput - Inputbox
    // target - e
    // value - is what we are changing
    fireEvent.change(searchInput, { target: { value: "Burger"}})
    expect(searchInput.value).toBe('Burger');

    // adding burger in value - similar to typing burger in search input

    // 12. now we need to enter search in search button
    fireEvent.click(searchBtn);
    // after cliking on search butn, screen should load that many card belonging to Subway
    // how will I do that

    // 13. give testid to RestuarantCard div in RestaurantCard.js
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    // expect(cardsAfterSearch).toBeInTheDocument();
    // console.log(cardsAfterSearch)

    // expect(searchBtn).toBeInTheDocument();
    expect(cardsAfterSearch.length).toBe(1); /*********************************Check this issue -50:00 */

    
})

// 5. As soon as we do some changes, our code auto runs due to HMR of parcel
// how can we simulate here in test files
// Follow the steps
// "watch-test": "jest --watch" --> write this command --> under scripts --> under package.json
// now do npm run watch-test instead of npm run test

// 6. On running test command one warning comes

/* console.error
Warning: An update to Body inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  fire events that update state
});
assert on the output
*/

// which says
// if you are using async function / useState
// wrap your function inside act function in test class


// 15. testing top rated resturants
it("should filter top rated resturants", async () => {

    
    // 16. act function 
    await act( async () => render(<BrowserRouter><Body/></BrowserRouter>))

    // 17. finding cards before filter
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);   

    // 18. find top rated btn
    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(3)
    
})

