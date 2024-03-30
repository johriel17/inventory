import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Dashboard from "../pages/Dashboard";

//Frozens
import FrozenIndex from '../pages/frozens/index'

//categories
import CategoryIndex from '../pages/categories/index'
const Content = () => {
    return (
        <Routes>

            <Route path="/" element={<Dashboard/>} />
            <Route path="frozens" element={<FrozenIndex/>} />
            <Route path="categories" element={<CategoryIndex/>} />

        </Routes>
    );
};

export default Content;
