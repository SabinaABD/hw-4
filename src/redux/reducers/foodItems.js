const initialState = {
    items: [],
    isLoaded: false
}

const foodItemsReducer = (state = initialState, action) => {
    if (action.type === 'SET_FOOD_ITEMS') {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state
}

export default foodItemsReducer