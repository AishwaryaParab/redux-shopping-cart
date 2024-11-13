import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  // const cartItems = useSelector((state) => state.cart.itemsList);
  // console.log(cartItems);

  return (
    // <BrowserRouter>
      <div className="App">
        {isLoggedIn ? <Layout /> : <Auth />}
    {/* //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/signup" element={<SignUp />} />
    //       <Route path="/login" element={<LogIn />} />
    //     </Routes> */}
       </div>
    // </BrowserRouter>
  );
}

export default App;
