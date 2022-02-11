import {act} from "@testing-library/react";
import {useState} from "react";
import {Route, Router, Routes} from "react-router-dom";

const RestaurantsFoodDetails = (props) => {
    const [item, setItem] = useState(0)

    const [basket, setBasket] = useState(0)

    const handleClick = () => {
        setBasket(basket+item)
        console.log(`item: ${item}`)
        console.log(`basket: ${basket}`)
    }


    return(
        <div className="food-details">
            <div className="food-details-item">
                <div className="food-details__img">
                    <img src={require(`../../assets/images/${props.img}`)} alt="" className='food-details__img-img'/>
                </div>
                <div className="food-details__content">
                    <div className="food-details__content-title">
                        {props.name}
                    </div>
                    <div className="food-details__content-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Id quam tortor nec arcu.
                        Euismod neque ultricies eget adipiscing condimentum.
                    </div>
                    <div className="food-details__content-in-stock">
                        Осталось XXX штук
                    </div>
                </div>
            </div>
            <div className="food-details__add">
                <div className="add__count">
                    <button onClick={() => setItem(item - 1)}>
                        <img src={require('../../assets/images/cancel.png')} alt="" className='add__count-btn'/>
                    </button>
                    <div className="add__count-number">
                        {item}
                    </div>
                    <button onClick={() => setItem(item + 1)}>
                        <img src={require('../../assets/images/white-addBtn.png')} alt="" className='add__count-btn'/>
                    </button>
                </div>
                <button className="add__basket" onClick={handleClick}>
                    <img src={require('../../assets/images/add-to-basket.png')} alt="" className='add__basket'/>
                </button>

            </div>
        </div>
    )
}

export default RestaurantsFoodDetails
