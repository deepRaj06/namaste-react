import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

// 1. to check with props, you'll need mock data
it("should render Restaurant Card component  with props Data" , () => {

    // 2.
    render(<RestaurantCard resData={MOCK_DATA}/>)

    // 3. Checking mockdata which forms a card is rendered or not
    // to check that check name of restaurant

    const name = screen.getByText("Subway");

    expect(name).toBeInTheDocument();
})

// 4. should render Restaurant Card component  with promoted label
it("should render Restaurant Card component  with promoted label" , () => {
    // Homwork - test HOC : with PromotedLabel
   
})
