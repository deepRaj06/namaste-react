import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// 13. Unit Testing i.e. testing in isolation

// 7. describe block contains string(name of block) and function
// 8. You can have describe inside describe, supose you want to group 3 and 4 inside describe, you can do that
describe("Contact us page test case", () => {

    // 1. Finding if heading exist, when contact component rendered
    test("Should load heading inside contact us component", () => {

        render(<Contact/>)  // this will be rendered to JS DOM

        const heading = screen.getByRole("heading");  // it find all heading inside Contact component

        // assertion
        expect(heading).toBeInTheDocument() // when you run this it will fail, saying jsx not enabled.
        // How will you enable this file?


    })
    // 2. Finding if button exist, when contact component rendered
    test("Should load button inside contact us component", () => {

        render(<Contact/>)  // this will be rendered to JS DOM

        // getByRole - heading/button
        // const button = screen.getByRole("button");  // it find all button inside Contact component

        // another way other than getByRole to find button
        const button = screen.getByText("Submit"); // Can find button using getByText, if anywhere on screen 
                                                    // there is a text named Submit

        // assertion
        expect(button).toBeInTheDocument() // when you run this it will fail, saying jsx not enabled.
        // How will you enable this file?


    })
    // 3. Finding if input exist, when contact component rendered
    test("Should load input inside contact us component", () => {

        render(<Contact/>)  // this will be rendered to JS DOM

        // getByRole - heading/input
        // const input = screen.getByRole("input");  // it find all input inside Contact component

        // another way other than getByRole to find input
        const input = screen.getByPlaceholderText("name"); // Can find input using getByText, if anywhere on screen 
                                                    // there is a text named Submit

        // assertion
        expect(input).toBeInTheDocument() // when you run this it will fail, saying jsx not enabled.
        // How will you enable this file?


    })
    // 4. Finding if input exist, when contact component rendered
    test("Should load two input boxes inside contact us component", () => {

        render(<Contact/>)  // this will be rendered to JS DOM

        // getByRole - heading/input
        // const input = screen.getByRole("input");  // it find two input inside Contact component

        // another way other than getAllByRole to find multiple input
        // query
        const inputBoxes = screen.getAllByRole("textbox"); // Can find two inputBoxes using getByText, if anywhere on screen 
                                                    // there is a text named Submit

        // console.log(inputBoxes.length) // It returns JSX element or react element or react fibre node or object
        // console.log(inputBoxes[0]) // It returns JSX element or react element

        // assertion
        expect(inputBoxes.length).toBe(2) // when you run this it will fail, saying jsx not enabled.
        // expect(inputBoxes.length).not.toBe(3) // when you run this it will fail, saying jsx not enabled.
        // How will you enable this file?


    })

})
// 9. You can have describe inside describe, supose you want to group 3 and 4 inside describe, you can do that
describe("Contact us page test case", () => {

    // 1. Finding if heading exist, when contact component rendered
    test("Should load heading inside contact us component", () => {

        render(<Contact/>)  // this will be rendered to JS DOM

        const heading = screen.getByRole("heading");  // it find all heading inside Contact component

        // assertion
        expect(heading).toBeInTheDocument() // when you run this it will fail, saying jsx not enabled.
        // How will you enable this file?


    })
    // 2. Finding if button exist, when contact component rendered
    test("Should load button inside contact us component", () => {

        render(<Contact/>)  // this will be rendered to JS DOM

        // getByRole - heading/button
        // const button = screen.getByRole("button");  // it find all button inside Contact component

        // another way other than getByRole to find button
        const button = screen.getByText("Submit"); // Can find button using getByText, if anywhere on screen 
                                                    // there is a text named Submit

        // assertion
        expect(button).toBeInTheDocument() // when you run this it will fail, saying jsx not enabled.
        // How will you enable this file?


    })
        // 10. 
        describe("grouping input and input boxes", () => {
            // 3. Finding if input exist, when contact component rendered
            // 11. jest says that instead of writing test, you can write it also i.e. it is alias of test
            // 12. Why name it -->  when you write with it --> it becomes easier to read complete sentence i.e. it should load input ......
            it("Should load input inside contact us component", () => {

                render(<Contact/>)  // this will be rendered to JS DOM

                // getByRole - heading/input
                // const input = screen.getByRole("input");  // it find all input inside Contact component

                // another way other than getByRole to find input
                const input = screen.getByPlaceholderText("name"); // Can find input using getByText, if anywhere on screen 
                                                            // there is a text named Submit

                // assertion
                expect(input).toBeInTheDocument() // when you run this it will fail, saying jsx not enabled.
                // How will you enable this file?


            })
            // 4. Finding if input exist, when contact component rendered
            test("Should load two input boxes inside contact us component", () => {

                render(<Contact/>)  // this will be rendered to JS DOM

                // getByRole - heading/input
                // const input = screen.getByRole("input");  // it find two input inside Contact component

                // another way other than getAllByRole to find multiple input
                // query
                const inputBoxes = screen.getAllByRole("textbox"); // Can find two inputBoxes using getByText, if anywhere on screen 
                                                            // there is a text named Submit

                // console.log(inputBoxes.length) // It returns JSX element or react element or react fibre node or object
                // console.log(inputBoxes[0]) // It returns JSX element or react element

                // assertion
                expect(inputBoxes.length).toBe(2) // when you run this it will fail, saying jsx not enabled.
                // expect(inputBoxes.length).not.toBe(3) // when you run this it will fail, saying jsx not enabled.
                // How will you enable this file?


            })

        })
    
})

// 5. We noticed if there are many things in component, then there can be so many test cases
// 6. idea is we can group them using describe used above and put all test inside describe