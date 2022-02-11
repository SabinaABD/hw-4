export const addFoodToBasket = (foodObj) => ({
    type: 'ADD_FOOD_TO_BASKET',
    payload: foodObj
})

export const clearBasket = () => ({
    type: 'CLEAR_BASKET'
})

export const removeBasketItem = (id) => ({
    type: 'REMOVE_BASKET_ITEM',
    payload: id
})

export const plusItem = (id) => ({
    type: 'PLUS_FOOD_ITEM',
    payload: id,
})

export const minusItem = (id) => ({
    type: 'MINUS_FOOD_ITEM',
    payload: id,
})


