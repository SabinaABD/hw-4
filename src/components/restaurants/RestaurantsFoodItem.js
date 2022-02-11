import {Link} from "react-router-dom";

const RestaurantsFoodItem = (props) => {
    const elem = props.elem
    return(
        <div>
            <div className="restaurant__food-item restaurant__food-item_active">
                <div className="restaurant__food-item-img">
                    <img src={require(`../../assets/images/${elem.img}`)} alt="" className='restaurant__food-item-img'/>
                </div>
                <button className="restaurant__food-item-title restaurant__food-item-title_active" >
                    <Link to ={`/${elem.id}`} >{elem.name}</Link>
                </button>
                <div className="restaurant__food-item-price">
                    {elem.price}$
                </div>
            </div>
        </div>
    )
}

export default RestaurantsFoodItem