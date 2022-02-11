import "../assets/styles/restaurants.css"
import RestaurantsFoodItem from "./restaurants/RestaurantsFoodItem";
import {useSelector} from "react-redux";


const Restaurants = () => {
    const state = useSelector(({ foodItems }) => foodItems.items);

    const restaurantsFoodItems = state.map(elem => <RestaurantsFoodItem key={elem.name} elem={elem} />)
    return (
        <div>
            <div className="restaurants">
                <div className="restaurants__inner">
                    <div className="restaurants__header">
                        <div className="restaurants__title">
                            Restaurants
                        </div>
                    </div>
                    <div className="restaurant__food-items" >
                        {restaurantsFoodItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurants
