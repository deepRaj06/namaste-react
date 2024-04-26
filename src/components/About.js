import User from './User'
import React from 'react'
import UserClass from './UserClass'
import { Component } from 'react'

// Class based component

class About extends Component { // You can write component if you are importing { Component } from 'react'
  // class About extends React.Component {

  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent Component Did Mount");
}

  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>About</h1>
        <h2> This is Namaste React Web Series</h2>
        {/* <User name={"Deepak Rajput (function)"}/> */}

        {/* If you are writing UserClass two times, it means you are 
            creating two different instances of the same class */}
        <UserClass name={"Deepak Rajput (class)"} location={"Ghaziabad (class)"} />
        {/* <UserClass name={"Himani Rajput (class)"} location={"Faridabad (class)"} /> */}
      </div>
    )
  }
}

// Function based component

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2> This is Namaste React Web Series</h2>
//       {/* <User name={"Deepak Rajput (function)"}/> */}

//       <UserClass name={"Deepak Rajput (class)"} location={"Ghaziabad (class)"} />
//     </div>
//   )
// }

export default About

// When you load or render the About component on webpage
// as soon as it comes to line UserClass, it sees another component as UserClass which it starts loading on webpage and let's goto UserClass component .......

// Lifecycle of Class Based Component:

// Parent Component
// About.js
// Firstly, Parent Constructor is called
// Secondly, Parent Render is called
// Thirdly, Child Constructor is called
// Fourthly, Child Render is called
// Fifthly, Child Component Did Mount is called
// Sixthly, Parent Component Did Mount is called

// UseCase of componentDidMount(){} i.e. why it is called after render
// componentDidMount is used to make API calls
// Why API calls made inside componentDidMount() {}
// I want to quickly render component , then make an API call, then fill the data

// What if About.js i.e. Parent component is having multiple children
// i.e. instead of one UserClass component now we are having two UserClass component
// Lifecycle will be ( Incorrect Order )
// Parent constructor
// Parent render
// Deepak Constructor
// deepak Render
// deepak componentDidMount
// himani constructor
// himani render
// himani componentDidMount
// Parent componentDidMount

// Lifecycle will be ( Correct Order ) - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// Parent constructor
// Parent render
  // <React create a PATCH for constructor and render function as they are fast/>
  // Deepak Constructor
  // deepak Render
  // himani constructor
  // himani render
  // <DOM UPDATED - IN SINGLE BATCH></DOM>
  // deepak componentDidMount
  // himani componentDidMount
  // Parent componentDidMount



// How to make an API call inside componentDidMount ?
// API Source:  https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
// API: https://api.github.com/users/deepRaj06

// Mounting Cycle ( UserClass.js )

// 1. As soon as class instance is created.
// 2. constructor is called with some dummy data
// 3. render(dummy data) is called
// 4. now componentDidMount was called with an api call was made

// Note: Mounting cycle was finished, when the component rendered once with some dummy data
// did not wait for API to call to finish

// Updating Cycle ( UserClass.js )
// 5. now setState was called ( as soon as setState was called, update cycle begins )
// 6. after updating state variables by setState, react triggers the render once again
// 7. this time state variables has been changed with new updated API values
// 8. Then react will update the DOM with new value
// 9. after DOM updation, componentDidUpdate was called




/* 
---Mounting---

1. Constructor (dummy data)
2. Render (dummy data)
    <HTML Dummy></HTML>
3. componentDidMount
    <API Call></API>
    <this.setState></this.setState> --> state variable is updated


---Updating---

1. render(API data)
2. <Html>(new API data)</Html>
3. componentDidUpdate

---Unmounting---

Unmounting means removing component from UI
i.e. when you go to new page for e.g. going to ContactUs page
1. componentDidUnmount is called

*/

/*
Extras

1. componentDidMount is not equivalent to useEffect()
2. After first render, componentDidMount is called
3. After every subsequent render, it is updated, not mounted ( i.e. mounting only happens after first time)
4. Like in useEffect, if we want to call everytime count gets updated, we put count in square brackets
5. How can we create a same situation in class based component?
6. Ans: componentDidUpdate will work here as it will be called
        after every update

        componentDidUpdate(prevProps, prevState) {
            if(this.state.count !== prevState.count){
            
            }
        }

        Note: If there are multiple like count, count2
              then you have to write like this
               componentDidUpdate(prevProps, prevState) {
                if(this.state.count !== prevState.count){
                
                }
                if(this.state.count2 !== prevState.count2){
                
                }
              }
        Reason: useEffect is having dependebcy array to store
                multiple vars.

7. What did we do in componentWillUnmount ?
    componentWillUnmount is called when we are leaving the page.


    pros of having single page application:
        E.g.
              componentDidNount() {
                this.timer = setInterval(() => {
                    console.log("NAMASTE REACT About.js")
                }, 1000)
              }

        Now if you refresh your page,
              it starts printing NAMASTE REACT About.js after every 1sec.
        Problem is if you move to new page, it is still calling
        NAMASTE REACT About.js after every 1 second.

        Now if you move again to About.js page,
              it will start calling NAMASTE REACT About.js 
              after every 2 seconds.

      This is reason we have to unmount every time we had mounted the app.
      Now,
      using clearInterval in componentWillUnmount
               componentWillUnmount(){
                  clearInterval(this.timer);
                  console.log("component will unmount is called")
              }

8. What will happen if we create setInterval in useEffect() ?
    It will need something to clear to stop it's setInterval
    otherwise it will show same behaviour as in class based component

    To clear setInterval()
              useEffect(() => {
                  const timer = setInterval(() => {
                    console.log("NAMASTE REACT About.js")
                  }, 1000);

                  this will be called after you leave the page
                  return () => {
                    clearInterval(timer);
                    console.log("useEffect Return")
                  }
              }, [])
*/

