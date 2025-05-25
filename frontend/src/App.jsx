import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"; // Import your Home component or other pages

function App(){
    return (
        <div>
            <BrowserRouter>
                <Navbar />
               
                
            </BrowserRouter>
        


        </div>
        
    );

}

export default App;