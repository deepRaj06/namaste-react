import React, { Suspense, lazy } from "react"; 
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// 1. 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
// import Grocery from "./components/Grocery";

// import is a function
const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  return <div className="app">
    <Header/>
    {/* if path == '/' */}
    {/* <Body/> */}
    {/* if path == '/about' */}
    {/* <About/> */}
    {/* if path == '/contact' */}
    {/* <Contact/> */}
    <Outlet/>
  </div>;
};

// 2. List of configuration to be provided to BrowserRouter
// Each and every object tahes the element and path for which configuration is defined
// Now I need to provide this configuration to AppLayout to render it
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery/>
          </Suspense>
        )
      },
      {
        path: "/restaurants/:resId",
        element: <RestuarantMenu/>
      },
    ],
    errorElement: <Error/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// 3. This RouterProvider will provide this Routing configurations to our App.
root.render(<RouterProvider router={appRouter}></RouterProvider>); // To render react component
