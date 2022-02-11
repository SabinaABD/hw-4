import {useDispatch} from "react-redux";

export const fetchFoodItems = () => (dispatch) => {
    fetch('http://localhost:3000/food-items')
        .then((response) => response.json()
            .then((response) =>
                dispatch(setFoodItems(response)))
        )

}


export const setFoodItems = (items) => ({
    type: 'SET_FOOD_ITEMS',
    payload: items
})

