const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FOOD_TO_BASKET': {
            const currentFoodItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentFoodItems,
                    totalPrice: getTotalPrice(currentFoodItems)
                    }
                }

            const items = Object.values(newItems).map(obj => obj.items)
            const allFoodItems = items.flat()
            const totalPrice = getTotalPrice(allFoodItems)
            const totalCount = allFoodItems.length

          return {
            ...state,
            items: newItems,
              totalCount,
              totalPrice,
          };
        }

        case 'CLEAR_BASKET': {
            return {
                totalCount: 0,
                totalPrice: 0,
                items: {}
            }
        }

        case 'REMOVE_BASKET_ITEM': {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        }
        case 'PLUS_FOOD_ITEM': {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }
            const items = Object.values(newItems).map(obj => obj.items)
            const allFoodItems = items.flat()
            const totalPrice = getTotalPrice(allFoodItems)
            const totalCount = allFoodItems.length

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }

        case 'MINUS_FOOD_ITEM': {
            const oldItems = state.items[action.payload].items
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }

            const items = Object.values(newItems).map(obj => obj.items)
            const allFoodItems = items.flat()
            const totalPrice = getTotalPrice(allFoodItems)
            const totalCount = allFoodItems.length


            return {
                ...state,
                items: newItems ,
                totalPrice,
                totalCount,
            }
        }
        default : {
            return {...state}
        }
}}

export default basketReducer