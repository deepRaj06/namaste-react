import React from "react";
import ReactDOM  from "react-dom/client";

// Using React.createElement

// const heading = React.createElement(
//     "div",
//     {className: "title"},
//     [
//         React.createElement("h1", {}, "h1 tag"),
//         React.createElement("h2", {}, "h2 tag"),
//         React.createElement("h3", {}, "h3 tag")
//     ]
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Using JSX

const jsxHeading = (
    <div className="title">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
        <h3>h3 tag</h3>
    </div>
)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// Composition of component

const Comp1 = () => {
    return (
        <div>
            comp1
        </div>
    )
}

const Comp2 = () => {
    return (
        <div>
            <Comp1/>
            comp2
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp2/>);

// Header Component

const SearchBar = () => {
    return (
        <div>
            <input/>
        </div>
    )
}

const HeaderComponent = () => {
    return (
        <div>
            <img/>
            <SearchBar/>
            <img/>
        </div>
    )
}
