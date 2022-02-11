import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "../assets/styles/main.css"
import Content from "./Content";
import React, {useEffect} from "react";
import { useDispatch} from "react-redux";
import {fetchFoodItems, setFoodItems} from "../redux/actions/foodItems";
import FoodPage from "./foodPages/FoodPage";
import Basket from "./Basket";

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(dispatch(fetchFoodItems()))
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Content />}>
                <Route path="/" element={<Home />}/>
                <Route path='/:id' element={<FoodPage />}/>
                <Route path="about" element={<About />} />
                <Route path="/basket" element={<Basket />}/>
            </Route>
        </Routes>
    );
}

export default Main

