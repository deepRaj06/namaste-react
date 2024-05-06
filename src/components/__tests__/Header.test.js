
import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// 1. If we run this, it will fail --> why --> it fails at useSelector point --> useSelector comes from react-redux
// below code is ruuning in JS DOM --> which understands --> jsx code/react code/ --> but didn't understands redux code/or selector
// 3. To make JS DOM understands, we'll provide provider to header and still it won't work
// 4. Now error comes becoz of Link which is neither React/JSX or Redux --> then what it is ?
// 5. This link is coming form react-router-DOM --> for this we need to provide Router to this Provider
// 6. Now it will pass
it("should render header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    // 8. Another way to get loginbutton
    // 9. finding bytext is not a good way, but finding byrole is a good way
    // const loginButton = screen.getByText("Login");

    // 10. Supose component is having multiple button i.e. Login button, cart button
    // then to find specifically the login button
    const loginButton = screen.getByRole("button", { name: "Login" });


    // 7. still fails as it need to import "@testing -library/jest-dom"
    expect(loginButton).toBeInTheDocument();

})

// 11. should render header component with cart items 0

it("should render header component with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // 12.   
    const cartItems = screen.getByText("Cart (0 items)");

    // 13. 
    expect(cartItems).toBeInTheDocument();

})
// 14. should render header component to check cart item with any number like 0, 1, 2 etc

it("should render header component with Cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // 15. To write dynamic cert items --> need to write regex
    const cartItems = screen.getByText(/Cart/);

    // 16. 
    expect(cartItems).toBeInTheDocument();

})

// 17. should change login button to logout button on click

it("should change login button to logout button on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    // 18. To click button, use fireEvent
    fireEvent.click(loginButton)

    // after the event is fired, login button --> changes --> to logout button
    // 19. try to find out logout button
    const logoutButton = screen.getByRole("button", { name: "Logout" });


    // 20. 
    expect(logoutButton).toBeInTheDocument();

})