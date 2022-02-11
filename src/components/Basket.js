import React from "react";
import "../assets/styles/basket.css"
import {useDispatch, useSelector} from "react-redux";
import BasketItem from "./BasketItem";
import Home from "./Home";
import {Link} from "react-router-dom";
import {clearBasket} from "../redux/actions/basket";

const Basket = () => {
    const dispatch = useDispatch()
    const {totalPrice, totalCount, items} = useSelector(({ basket }) => basket)

    const addedFood = Object.keys(items).map(key => {
        return items[key].items[0]
    })

    const onClearBasket = () => {
        dispatch(clearBasket())
    }

    return (
        <div>
           <div className="basket-wrapper">
               <div className="basket__header">
                   <div className="basket__header-title">
                       <img src={require("../assets/images/shopping-cart.png")} alt="" className="basket__header-title-img"/>
                       <div className="basket__header-title-name">
                           Корзина
                       </div>
                   </div>
                   <button onClick={onClearBasket} className="basket__header-title-clear">
                       <img src={require('../assets/images/shopping-bin.png')} alt="" className="basket__header-title-clear-img"/>
                       <div className="basket__header-title-clear-name">
                           Очистить корзину
                       </div>
                   </button>
               </div>
               <div className="basket__content">
                   <div className="basket__content-items">
                       {
                           addedFood.map(obj => <BasketItem name={obj.name}
                                                            price={obj.price}
                                                            img={obj.img}
                                                            totalPrice={items[obj.id].totalPrice}
                                                            totalCount={items[obj.id].items.length}
                                                            id={obj.id}/>)
                       }
                   </div>
                   <div className="basket__content-total">
                       <div className="basket__content-total-amount">
                           Всего товаров: <span>{totalCount} шт.</span>
                       </div>
                       <div className="basket__content-total-sum">
                           Сумма заказа: <span>{totalPrice}$</span>
                       </div>
                   </div>
                   <div className="basket__content-footer">
                       <Link to='/' element={<Home />} className="basket__content-footer-back" >
                           <img src={require('../assets/images/basket-path.png')} alt="" className="basket__content-footer-back-img"/>
                           Вернуться назад
                       </Link>
                       <button className="basket__content-footer-pay">
                           Оплатить сейчас
                       </button>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Basket
