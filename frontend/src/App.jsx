import React from "react";
import { BrowserRouter as   Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App(){
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                  
                </Routes>
            </BrowserRouter>
        


        </div>
        
    );

}

export default App;