import React from "react"
import {BrowserRouter} from "react-router-dom";
import HomeMain from "./components/HomeMain";
import Navigation from "./components/Navigation";

function App() {
  return (
   <>
       <div className="app">
           <BrowserRouter>
               <Navigation/>
               <HomeMain/>
           </BrowserRouter>
       </div>

   </>
  )
}
export default App
