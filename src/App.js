import React from "react"
import Navigation from "./components/Navigation"
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
   <>
       <div className="app">
           <BrowserRouter>
               <Navigation/>

           </BrowserRouter>


       </div>

   </>
  )
}
export default App
