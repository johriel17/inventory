import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Dashboard from "../pages/Dashboard";

//Frozens
import FrozenIndex from '../pages/frozens/index'
const Content = () => {
    return (
        <Routes>

            <Route exact path="/" element={<Dashboard/>}></Route>
            <Route path="/frozens" element={<FrozenIndex/>}></Route>

        </Routes>
    );
};

export default Content;
