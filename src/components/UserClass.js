// class based component

//1 class keyword , then name of the component i.e. UserClass, to make this
// a component we'll write extends React.component
//2 this is way to tell react that this is a class based component

import React from "react";


class UserClass extends React.Component {

    // whenever a class instance was created,
    // state variable was created
    //4 to receive props in class use constructor and superclass
    constructor(props){
        //5 The purpose of using the super constructor with a props argument 
        // is to allow a component to inherit the properties of its parent component 
        // and also pass in additional properties as arguments to the component.
        super(props);
        console.log(props);

        // 8 state variables in class
        // this.state is reserved keyword
        // Note: this.state is a big object variable 
        // which contains all the states instead of
        // individuals this.state
        this.state = {
            count: 0,
            count2: 1,
            count3: 0,
            count4: 4,
            // 18 creating local state variable with dummy data
            // to store github api result
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://dummy-photo.com"
            },
        }
        console.log(this.props.name + "Child Constructor");
    }
    // 

    //3 render method will return some piece of JSX
    // render() {
    //     return(
    //         <div className="user-card">
    //             {/* to access props inside render or anywhere 
    //             inside class use this keyword */}
    //             <h2>Name: {this.props.name}</h2>
    //             <h3>Location: {this.props.location}</h3>
    //             <h4>Contact: @deepak13</h4>
    //         </div>  
    //     )
    // }

    // 15 componentDidMount method
    // This method is called after constructor is called, 
    // render method is called
    // and then after both of them are called then componentDidMount is called

    // 16 make componentDidMount async function
    async componentDidMount(){
        console.log(this.props.name + "Child Component Did Mount");
        // 17 make github API Call
        const data = await fetch("https://api.github.com/users/deepRaj06");
        const json = await data.json();
        console.log(json);
        // 19 storing data in this.setState
        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    // 22
    componentDidUpdate(){
        console.log("Component did update is called")
    }

    // 24
    // simulating code of useEffect when it updates on every time 
    // count changes
    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count){

        }
        console.log("Component did update is called")
    }

    // 23
    componentWillUnmount(){
        clearInterval();
        console.log("component will unmount is called")
    }

    //6 destructuring this.props
    render() {
        // const {name, location} = this.props;
        // 10
        const { count, count2 } = this.state;

        // 20.
        const { name, location, avatar_url } = this.state.userInfo;

        // debugger

        console.log(this.props.name + "Child Render");

        return(
            <div className="user-card">
                 {/* 11 */}
                 <h1>Count - {count}</h1> 
                {/* 12 */}
                {/* <h1>Count2 - {count2}</h1>              */}
                {/* 13 */}
                <button onClick={() =>{
                    // NEVER UPDATE STATE VARIABLES DIRECTLY i.e. this.state  = count + 1
                    // 14 this.setState will directly update state variables 
                    // this.setState will not touch other variables like count3, count4 unless passed in this.setState object
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2 // do not create separate this.setState to update count2 variable
                    })
                }}>Increase Count</button>
                {/* 9 */}
                {/* <h1>Count - {this.state.count}</h1> */}
                {/*7 to access props inside render or anywhere 
                inside class use this keyword */}
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @deepak13</h4>
                {/* 21 */} 
                <img src={avatar_url} />
            </div>  
        )
    }
}

export default UserClass;
// Loading a class based component means,
// creating an instance of the class

// Whenever instance of UserClass is created
// a constructor is called
// constructor is best place to create state variables

// props is extracted over here like this 
// constructor(props){}

// How does React component behind scenes when loading or mounting ?


// .....Continuing from About.js
// Since UserClass is a class based component, new instance of the class is created
// when the class get's loaded, constructor is called
// thne this render is called
// to show this which one called when ?, let's apply console in constructor and render
// Now creating classs based ccomponent in About.js
