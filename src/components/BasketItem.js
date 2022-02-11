import React from "react";
import {useDispatch} from "react-redux";
import {removeBasketItem, minusItem, plusItem} from "../redux/actions/basket";

const BasketItem = ({name, img, totalPrice, totalCount, id}) => {

    const dispatch = useDispatch()

    const removeItem = () => {
        dispatch(removeBasketItem(id))
    }

    const onPlusItem = () => {
        dispatch(plusItem(id))
    }

    const onMinusItem = () => {
        dispatch(minusItem(id))
    }

    return (
        <div className="basket__content-item">
            <div className="basket__content-item-img">
                <img src={require(`../assets/images/${img}`)} alt="" className="basket__content-item-img-img"/>
            </div>
            <div className="basket__content-item-name">
                {name}
            </div>
            <div className="add__count add__count-basket">
                <button onClick={onMinusItem}>
                    <img src={require('../assets/images/basket-remove-btn.png')} alt="" className='add__count-btn'/>
                </button>
                <div className="add__count-number-basket">
                    {totalCount}
                </div>
                <button onClick={onPlusItem}>
                    <img src={require('../assets/images/basket-add-btn.png')} alt="" className='add__count-btn'/>
                </button>
            </div>
            <div className="basket__content-item-price">
                {totalPrice}$
            </div>
            <button onClick={removeItem} className="basket__content-item-remove">
                <img src={require('../assets/images/remove-btn.png')} alt="" className="basket__content-item-remove-img"/>
            </button>
        </div>
    )
}

export default BasketItem