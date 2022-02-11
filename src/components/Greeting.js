import "../assets/styles/greeting.css"
import Restaurants from "./Restaurants";

const Greeting = () => {
    return (
        <div className="greeting">
            <div className="greeting__container">
                <div className="greeting__title1">
                    👑 Deal of the weekend
                </div>
                <div className="greeting__main-title">
                    Hello, Customer!
                </div>
                <div className="greeting__title2">
                    Get <span>FREE delivery</span> on every weekend.
                </div>
            </div>
        </div>
    )
}

export default Greeting