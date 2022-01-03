import React from 'react';
//import {Route, Routes, Switch} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Airlines from './Airlines/Airlines';
import Airline from './Airline/Airline';

const App = () => {
    
    return (
        
            <Routes>
                <Route exact path="/" element={<Airlines />}/>
                <Route exact path="/airlines/:slug" element={<Airline />}/>
            </Routes>
    );

}

export default App