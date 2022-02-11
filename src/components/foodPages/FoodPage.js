import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Home from "../Home";
import { useSelector, useDispatch} from "react-redux";
import {addFoodToBasket} from "../../redux/actions/basket";

const FoodPage = () => {
    const {id} = useParams()
    const state = useSelector(({ foodItems }) => ({ items: foodItems.items }))
    const addedItems = useSelector(({basket}) => basket.items)
    const addedCount = addedItems[id] ? addedItems[id].items : {}
    const addedItemsCount = Object.values(addedCount).length
    


    let foodPage = state.items[id-1]

    const [available, setAvailable] = useState(foodPage.inStock)

    const dispatch = useDispatch()

    const onClickAddFood = (name) => {
        dispatch(addFoodToBasket(name))
    }


    return(
        <div className='food-page'>
            <button className="food-page-back">
                <div className='food-page-back-link'>
                    <Link to='/' element={<Home/>}>Назад к меню</Link>
                </div>
            </button>
            <div className="food-details">
                <div className="food-details-item">
                    <div className="food-details__img">
                        <img src={require(`../../assets/images/${foodPage.img}`)} alt="" className='food-details__img-img'/>
                    </div>
                    <div className="food-details__content">
                        <div className="food-details__content-title">
                            {foodPage.name}
                        </div>
                        <div className="food-details__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Id quam tortor nec arcu.
                            Euismod neque ultricies eget adipiscing condimentum.
                        </div>
                        <div className="food-details__content-in-stock">
                            {available >= 0 && available || 0} items is available
                        </div>
                    </div>
                </div>
                <div className="food-details__add">
                    {/*<div className="add__count">
                        <button >
                            <img src={require('../../assets/images/cancel.png')} alt="" className='add__count-btn'/>
                        </button>
                        <div className="add__count-number">
                            0
                        </div>
                        <button >
                            <img src={require('../../assets/images/white-addBtn.png')} alt="" className='add__count-btn'/>
                        </button>
                    </div>*/}
                    <button onClick={() => onClickAddFood(foodPage)} className="add__basket">
                        <img src={require('../../assets/images/add-to-basket.png')} alt="" className='add__basket'/>
                    </button>
                    <div className="add__count-number-total">
                        {addedItemsCount} in cart
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FoodPage