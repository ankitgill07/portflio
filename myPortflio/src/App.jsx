import React from "react"
import Home from "./components/Home"
import { BrowserRouter } from "react-router-dom"
import "@fontsource/poppins"; 
import "@fontsource/roboto-mono";
import Porjects from "./components/Porjects";

function App() {


  return (
    <>
    <BrowserRouter>
 <div className=" relative overflow-x-hidden">
 <Home/>
 </div>
    </BrowserRouter>

    </>
  )
}

export default App
