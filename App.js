 
 // Single div element
 // React.createElement(tag, object(place where you give attribute to your tags), 
 // text or anything we need to put inside tag for example inside h1 tag)
//  const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
 // React.createElement creates an object
//  console.log("heading", heading)

 // To put above h1 inside div of id as root, we need to create root in react(comes from second script link)
 // Everything inside React will run inside root
//  const root = ReactDOM.createRoot(document.getElementById("root"));

 // This render object is responsible for converting object into heading tag and putting it inside div of id as root
//  root.render(heading);

//  Nested div element: (To write below in react)
    // <div id="parent">
    //     <div id="child">
    //         <h1>I'm h1 tag</h1>
    //         <h2>I'm h2 tag</h2>
    //     </div>
    //     <div id="child2">
    //         <h1>I'm h1 tag</h1>
    //         <h2>I'm h2 tag</h2>
    //     </div>
    // </div>

    // ReactElement(Object) ==> HTML( Browser Understands )
    const parent = React.createElement(
        "div",
        { id: "parent" },
        [
            React.createElement(
                "div",
                { id: "child" },
                [
                    React.createElement("h1", {}, "I'm h1 tag"),
                    React.createElement("h2", {}, "I'm h2 tag")
                ]
            ),
            React.createElement(
                "div",
                { id: "child2" },
                [
                    React.createElement("h1", {}, "I'm h1 tag"),
                    React.createElement("h2", {}, "I'm h2 tag")
                ]
            )
        ]
        
    )

    console.log("parent", parent)

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);

    // Note: To have siblings like this (for e.g. two h1 tags, you need an array and then create an element for this)

    // Note: If you see above react structure,
    // You will say React instead of making life easier is looking hard, 

    // That's why we need something called JSX

